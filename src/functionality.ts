export function greet(name: number) {
  console.log("Hello ", name);
}

export function append<T>(list: Array<T>, item: T) {
  return [...list, item];
}
