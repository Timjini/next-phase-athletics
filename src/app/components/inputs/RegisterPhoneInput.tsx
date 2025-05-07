import React from 'react';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  error?: { message?: string };
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const RegisterPhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ required, error, onChange, value, ...props }, ref) => {
    const formatPhoneNumber = (value: string) => {
      if (!value) return value;
      
      const digits = value.replace(/\D/g, '');
      
      if (digits.length <= 3) return `(${digits}`;
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatPhoneNumber(e.target.value);
      // Update the input value
      e.target.value = formattedValue;
      // Propagate the change to React Hook Form
      if (onChange) {
        onChange({
          ...e,
          target: {
            ...e.target,
            value: formattedValue
          }
        });
      }
    };

    return (
      <div className="mb-4">
        <input
          type="tel"
          ref={ref}
          onChange={handleChange}
          value={value}
          maxLength={14}
          className={`w-full px-3 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </div>
    );
  }
);

RegisterPhoneInput.displayName = 'RegisterPhoneInput';

export default RegisterPhoneInput;