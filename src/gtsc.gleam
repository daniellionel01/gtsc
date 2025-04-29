import gleam/io

@external(javascript, "./functionality.ts", "greet")
pub fn greet(name: String) -> Nil

@external(javascript, "./functionality.ts", "append")
pub fn append(list: List(a), append: a) -> Nil

pub fn main() -> Nil {
  io.println("Hello from gtsc!")
}
