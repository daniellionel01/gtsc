export function greet(name: string) {
  return `Hello ${name}`;
}

export function append<T>(list: Array<T>, item: T) {
  return [...list, item];
}
