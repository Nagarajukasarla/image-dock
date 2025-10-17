export function validateFields(
  file: File | null,
  category: string,
  subCategory: string,
  productName: string,
  name: string
): boolean {
  return !!(file && category && subCategory && productName.trim() && name.trim());
}