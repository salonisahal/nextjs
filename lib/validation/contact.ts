const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRequiredString(value: string, fieldLabel: string): string {
  if (!value.trim()) {
    return `${fieldLabel} is required.`;
  }
  return "";
}

export function validateEmail(value: string): string {
  if (!value.trim()) {
    return "Email is required.";
  }
  if (!EMAIL_REGEX.test(value.trim())) {
    return "Enter a valid email address.";
  }
  return "";
}
