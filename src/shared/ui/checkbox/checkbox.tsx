import { useEffect, useState } from "react";

type Props = {
  //   name: string;
  value: boolean;
  onChange?: (val: boolean) => void;
};

export function Checkbox({ value, onChange }: Props) {
  const [val, setVal] = useState(value ?? false);

  const changeHandle = () => {
    if (onChange) {
      onChange(!val);
    }
  };

  useEffect(() => {
    setVal(!!value);
  }, [value]);
  return <input type="checkbox" checked={val} onChange={changeHandle}></input>;
}
