import gleam/io
import gtsc/lib_ffi

pub fn main() -> Nil {
  let x = lib_ffi.greet(3)
  io.println(x)
}
