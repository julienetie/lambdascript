import { expect } from 'chai'
import { comp, pipe } from '../../lambdascript.js'

describe('Composition utilities', () => {
  describe('comp function', () => {
    it('should compose multiple functions in reverse order', () => {
      const add5 = x => x + 5
      const multiplyBy2 = x => x * 2
      const subtract10 = x => x - 10

      const composed = comp(subtract10, multiplyBy2, add5)

      expect(composed(1)).to.equal(2)
    })
  })

  describe('pipe function', () => {
    it('should chain multiple functions in sequence', () => {
      const square = x => x * x
      const add3 = x => x + 3
      const halve = x => x / 2

      const piped = pipe(square, add3, halve)

      expect(piped(4)).to.equal(9.5)
    })
  })
})
