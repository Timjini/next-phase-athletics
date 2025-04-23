import React, { forwardRef } from 'react';
import { Input } from '@/components/ui/input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
import { formatPhoneNumber } from '@/app/utils/formatNumber';


const PhoneInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, onChange, ...rest } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (onChange) {
      // Create a synthetic event with the formatted value
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: formatted
        }
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <Input
      {...rest}
      ref={ref}
      value={value}
      onChange={handleChange}
      maxLength={14}
      placeholder="(555) 123-4567"
    />
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;