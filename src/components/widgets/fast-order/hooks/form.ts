import { ApiResponseError } from "@/lib/http/errors";
import { fastOrder } from "@/services/order";
import { FastOrderDto } from "@/services/order/types";
import { useCartStore } from "@/store/cart/cart";
import { error } from "console";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { unknown } from "zod";

export enum FormStatus {
  wait,
  completed,
  pending,
  error,
}

type FormDataField = {
  value: string;
  error: string;
};

type FormDataType = {
  name: FormDataField;
  phone: FormDataField;
  email: FormDataField;
};

type ValidateError = {
  message: string;
  path: string[];
};

type SumbitReturn = {
  status: boolean;
  validateErrors?: ValidateError[];
};

function transformData(
  productItems: { id: string | number; count: number }[],
  formData: FormDataType
): FastOrderDto {
  return {
    email: formData.email.value,
    name: formData.name.value,
    phone: formData.phone.value,
    products: productItems,
  };
}

async function SubmitForm(data: FastOrderDto): Promise<SumbitReturn> {
  try {
    const result = await fastOrder(data);
    return result;
  } catch (e) {
    if (e instanceof ApiResponseError) {
      const { data: validateErrors } = (e as ApiResponseError<ValidateError[]>)
        .responseErrorData;
      return {
        status: false,
        validateErrors,
      };
    }
  }
  return {
    status: false,
  };
}
function getValidateError(key: string, errors: ValidateError[]) {
  const error = errors.find((error) => {
    return error.path[0] === key;
  });
  if (error) {
    return error.message;
  }
  return "";
}

export function useFastOrderForm() {
  const [status, setStatus] = useState<FormStatus>(FormStatus.wait);

  const fastProductItems = useCartStore((state) => state.fastProductItems);

  const [formData, setFormData] = useState<FormDataType>({
    name: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
  });

  const submit = async () => {
    setStatus(FormStatus.pending);
    const result = await SubmitForm(transformData(fastProductItems, formData));
    if (result.status) {
      setStatus(FormStatus.completed);
    } else {
      const { validateErrors } = result;
      const { email, phone, name } = formData;
      setFormData({
        email: {
          value: email.value,
          error: getValidateError("email", validateErrors ?? []),
        },
        phone: {
          value: phone.value,
          error: getValidateError("phone", validateErrors ?? []),
        },
        name: {
          value: name.value,
          error: getValidateError("name", validateErrors ?? []),
        },
      });
      setStatus(FormStatus.error);
    }
  };

  const changeName = (value: string) => {
    setFormData({ ...formData, name: { value, error: "" } });
  };

  const changePhone = (value: string) => {
    setFormData({ ...formData, phone: { value, error: "" } });
  };

  const changeEmail = (value: string) => {
    setFormData({ ...formData, email: { value, error: "" } });
  };

  useEffect(() => {
    setStatus(FormStatus.wait);
  }, [fastProductItems]);

  return { status, formData, changePhone, changeName, changeEmail, submit };
}
