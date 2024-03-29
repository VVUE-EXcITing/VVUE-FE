/* eslint-disable @next/next/no-sync-scripts */
export function debounce(fn: any, delay: number) {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
