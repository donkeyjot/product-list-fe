export function isOkNumber(val: number): boolean {
  return val !== null && val !== undefined && !isNaN(val);
}
