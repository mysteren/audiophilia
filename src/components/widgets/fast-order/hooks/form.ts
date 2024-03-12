import { useCartStore } from "@/store/cart/cart";
import { useEffect, useState } from "react";

export enum FormStatus {
  wait,
  completed,
  pending,
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

async function SubmitForm(data: FormDataType) {
  console.log(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
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
    await SubmitForm(formData);
    setStatus(FormStatus.completed);
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
