# Neversitup Test

## Product structure

- `src/function` - Contains the main source files.
  - `manipulate.js` - Function to generate unique permutations.
  - `odd-number.js` - Function to find the odd integer.
  - `smily.js` - Function to count smiley faces.
- `tests/` - Contains unit tests for the functions.
  - `manipulate.spec.js` - Tests for the manipulate function.
  - `odd-number.spec.js` - Tests for the findOddNumber function.
  - `smily.spec.js` - Tests for the countSmilyFace function.
- `README.md` - This file.

## Conventions

- Use `camelCase` for function names and variable names.
- Each file contains a single function wit hits corresponding unit tests in a separate file.
- Unit tests are written using jest for simplicity.

## Running Tests

To run the tests, use:

```bash
npm run test
npm run test:watch
npm run test:watchAll
npm run test `file name`
```
