export function validateFields(
  file: File | null,
  category: string,
  subCategory: string,
  name: string
): boolean {
  return !!(file && category && subCategory && name.trim());
}