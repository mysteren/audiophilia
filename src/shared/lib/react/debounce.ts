export function debounce<T extends unknown[], U>(
  callback: (...args: T) => PromiseLike<U> | U,
  wait: number
) {
  /**
   * @TODO пофиксить
   */
  let timer: any

  return (...args: T): Promise<U> => {
    clearTimeout(timer)
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback(...args)), wait)
    })
  }
}

export default function useDebouncedFunction(func, delay: number) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}