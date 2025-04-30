// This file exists solely to verify type compatibility between 
// source TS files and Gleam-generated .d.mts files

// Import from source
import { greet as greetSource } from './gtsc/lib';
// Import from Gleam-generated .d.mts - using a relative path
import { greet as greetGenerated } from '../build/dev/javascript/gtsc/gtsc/lib_ffi.js';

// This should fail with type error because:
// - greetSource expects a string
// - greetGenerated expects a number
function testGreet() {
  const name = "world";
  // @ts-expect-error - This should error as greetGenerated expects a number
  const result = greetGenerated(name);
  return result;
}

// Type check should catch this inconsistency between the
// implementation and the Gleam FFI binding