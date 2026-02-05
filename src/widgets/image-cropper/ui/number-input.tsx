import { useEffect, useState, useCallback } from "react";

interface NumberInputProps {
  value?: number;
  onChange?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  debounceDelay?: number;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function NumberInput({
  value,
  onChange,
  min,
  max,
  debounceDelay = 300,
  className = "",
  placeholder,
  disabled,
}: NumberInputProps) {
  const [displayValue, setDisplayValue] = useState<string>(
    value?.toString() ?? "",
  );
  const [debouncedValue, setDebouncedValue] = useState<number | undefined>(
    value,
  );

  // Update display value when value prop changes
  useEffect(() => {
    if (value !== debouncedValue) {
      setDisplayValue(value?.toString() ?? "");
      setDebouncedValue(value);
    }
  }, [value, debouncedValue]);

  const validateValue = useCallback(
    (num: number): number | undefined => {
      if (isNaN(num)) {
        return undefined;
      }

      if (min !== undefined && num < min) {
        return min;
      }

      if (max !== undefined && num > max) {
        return max;
      }

      return num;
    },
    [min, max],
  );

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayValue === "") {
        setDebouncedValue(undefined);
        onChange?.(undefined);
      } else {
        const num = parseFloat(displayValue);
        const validated = validateValue(num);
        setDebouncedValue(validated);
        onChange?.(validated);
      }
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [displayValue, debounceDelay, onChange, validateValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value);
  };

  const handleBlur = () => {
    // Immediately process value on blur
    if (displayValue === "") {
      setDebouncedValue(undefined);
      onChange?.(undefined);
    } else {
      const num = parseFloat(displayValue);
      const validated = validateValue(num);
      setDisplayValue(validated?.toString() ?? "");
      setDebouncedValue(validated);
      onChange?.(validated);
    }
  };

  return (
    <input
      type="number"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      min={min}
      max={max}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
    />
  );
}
