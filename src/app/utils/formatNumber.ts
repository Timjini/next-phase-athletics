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
