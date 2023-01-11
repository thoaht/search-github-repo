export const debounce = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay = 250
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(args), delay);
  };
};
