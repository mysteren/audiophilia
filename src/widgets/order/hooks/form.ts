import { ApiResponseError } from "@/shared/lib/http/errors";
import { order } from "@/services/order";
import { OrderDto } from "@/services/order/types";
import { useActioveModals } from "@/store/active-modals/active-modals";
import { useCartStore } from "@/store/cart/cart";
import { CartItemCounts } from "@/types/cart";
import { useEffect, useState } from "react";

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
  orderId?: string;
};

function transformData(
  productItems: { id: string | number; counts: CartItemCounts }[],
  formData: FormDataType
): OrderDto {
  return {
    email: formData.email.value,
    name: formData.name.value,
    phone: formData.phone.value,
    products: productItems,
  };
}

async function SubmitForm(data: OrderDto): Promise<SumbitReturn> {
  try {
    const result = await order(data);
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

export function useOrderForm() {
  const [status, setStatus] = useState<FormStatus>(FormStatus.wait);
  const [orderId, setOrderId] = useState<string>("");

  const { productItems, clearProductItem } = useCartStore();
  const { close } = useActioveModals()

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
    const result = await SubmitForm(transformData(productItems, formData));
    if (result.status) {
      setStatus(FormStatus.completed);
      setOrderId(result.orderId ?? "");
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
  }, [productItems]);

  const finish = () => {
    close();
    clearProductItem();
    setStatus(FormStatus.wait);
  };

  return {
    status,
    formData,
    changePhone,
    changeName,
    changeEmail,
    submit,
    finish,
    orderId,
  };
}
