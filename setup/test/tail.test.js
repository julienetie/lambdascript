import { expect } from 'chai'
import { tail } from '../../lambdascript.js'

describe('Tail recursion utilities', () => {
  describe('linear function', () => {
    it('should execute a linear tail-recursive function', () => {
      const factorial = n => n === 0 ? 1 : tail.linear(() => factorial(n - 1) * n, n)
      expect(factorial(5)).to.equal(120)
    })
  })

//   describe('trampoline function', () => {
//     it('should execute a function with TCO using trampolining', () => {
//       const smallFibonacci = tail.trampoline(
//         fib => (n, a = 0, b = 1) => n === 0 ? a : fib(n - 1, b, a + b)
//       )
//       expect(smallFibonacci(6)).to.equal(8)
//     })
//   })
})
