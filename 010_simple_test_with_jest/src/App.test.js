import { add } from './App'

test('Simple test', () => {
  expect(true).toBeTruthy()
})

test('Test add() function', () => {
  expect(add(1, 2)).toBe(3)
  expect(add(-20, 0)).toBe(-20)
})
