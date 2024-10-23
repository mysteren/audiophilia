import { useEffect, useState } from "react";

type Props = {
  //   name: string;
  value: boolean;
  onChange?: (val: boolean) => void;
  disabled?: boolean;
};

export function Checkbox({ value, onChange, disabled }: Props) {
  const [val, setVal] = useState(value ?? false);

  const changeHandle = () => {
    if (onChange) {
      onChange(!val);
    }
  };

  useEffect(() => {
    setVal(!!value);
  }, [value]);
  return (
    <input
      disabled={disabled}
      type="checkbox"
      checked={val}
      onChange={changeHandle}
    ></input>
  );
}
