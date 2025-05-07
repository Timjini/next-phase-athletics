export const formatPhoneNumber = (value: string): string => {
  if (!value) return "";

  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length <= 3) {
    return `(${cleaned}`;
  }
  if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  }
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
    6,
    10
  )}`;
};


export const formatAthletePhoneNumber = (value: string): string => {
  if (!value) return value;
  
  const digits = value.replace(/\D/g, "");
  
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

/**
 * Phone number regex pattern for validation
 */
export const phonePattern = {
  value: /^\(\d{3}\)\s\d{3}-\d{4}$/,
  message: "Phone number must be in the format (555) 123-4567"
};

/**
 * Optional phone number regex pattern (either empty or valid format)
 */
export const optionalPhonePattern = {
  value: /^$|^\(\d{3}\)\s\d{3}-\d{4}$/,
  message: "Phone number must be in the format (555) 123-4567 or empty"
};