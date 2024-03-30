import { expect } from 'chai'
import { isArray, isBigInt, isBoolean, isFunction, isInteger, isNaN, isNumeric, isObject, isString, isSymbol, isNonValue } from '../../lambdascript.js'

describe('type checkers', () => {
  it('isArray should return true for arrays', () => {
    expect(isArray([])).to.equal(true)
  })

  it('isArray should return false for non-arrays', () => {
    expect(isArray({})).to.equal(false)
    expect(isArray(123)).to.equal(false)
    expect(isArray('string')).to.equal(false)
  })

  it('isBigInt should return true for BigInt values', () => {
    expect(isBigInt(10n)).to.equal(true)
  })

  it('isBigInt should return false for non-BigInt values', () => {
    expect(isBigInt(10)).to.equal(false)
    expect(isBigInt({})).to.equal(false)
    expect(isBigInt('string')).to.equal(false)
  })

  it('isBoolean should return true for boolean values', () => {
    expect(isBoolean(true)).to.equal(true)
    expect(isBoolean(false)).to.equal(true)
  })

  it('isBoolean should return false for non-boolean values', () => {
    expect(isBoolean(10)).to.equal(false)
    expect(isBoolean({})).to.equal(false)
    expect(isBoolean('string')).to.equal(false)
  })

  it('isFunction should return true for functions', () => {
    expect(isFunction(() => {})).to.equal(true)
  })

  it('isFunction should return false for non-function values', () => {
    expect(isFunction(10)).to.equal(false)
    expect(isFunction({})).to.equal(false)
    expect(isFunction('string')).to.equal(false)
  })

  it('isInteger should return true for integer values', () => {
    expect(isInteger(10)).to.equal(true)
    expect(isInteger(-5)).to.equal(true)
  })

  it('isInteger should return false for non-integer values', () => {
    expect(isInteger(3.14)).to.equal(false)
    expect(isInteger({})).to.equal(false)
    expect(isInteger('string')).to.equal(false)
  })

  it('isNaN should return true for NaN values', () => {
    expect(isNaN(NaN)).to.equal(true)
  })

  it('isNaN should return false for non-NaN values', () => {
    expect(isNaN(10)).to.equal(false)
    expect(isNaN({})).to.equal(false)
    expect(isNaN('string')).to.equal(false)
  })

  it('isNumeric should return true for numeric values (excluding NaN)', () => {
    expect(isNumeric(10)).to.equal(true)
    expect(isNumeric(3.14)).to.equal(true)
  })

  it('isNumeric should return false for non-numeric values (including NaN)', () => {
    expect(isNumeric(NaN)).to.equal(false)
    expect(isNumeric({})).to.equal(false)
    expect(isNumeric('string')).to.equal(false)
  })

  it('isObject should return true for objects (excluding arrays)', () => {
    expect(isObject({})).to.equal(true)
  })

  it('isObject should return false for non-object values', () => {
    expect(isObject([])).to.equal(false)
    expect(isObject(10)).to.equal(false)
    expect(isObject('string')).to.equal(false)
  })

  it('isString should return true for string values', () => {
    expect(isString('string')).to.equal(true)
  })

  it('isString should return false for non-string values', () => {
    expect(isString(10)).to.equal(false)
    expect(isString({})).to.equal(false)
    expect(isString([])).to.equal(false)
  })

  it('isSymbol should return true for symbol values', () => {
    expect(isSymbol(Symbol('mySymbol'))).to.equal(true)
  })

  it('isSymbol should return false for non-symbol values', () => {
    expect(isSymbol(10)).to.equal(false)
    expect(isSymbol('string')).to.equal(false)
    expect(isSymbol({})).to.equal(false)
    expect(isSymbol(null)).to.equal(false)
    expect(isSymbol(undefined)).to.equal(false)
  })

  it('isNonValue should return true for undefined, null, and NaN', () => {
    expect(isNonValue(undefined)).to.equal(true)
    expect(isNonValue(null)).to.equal(true)
    expect(isNonValue(NaN)).to.equal(true)
  })

  it('isNonValue should return false for other values', () => {
    expect(isNonValue(0)).to.equal(false)
    expect(isNonValue('')).to.equal(false)
    expect(isNonValue({})).to.equal(false)
    expect(isNonValue(false)).to.equal(false)
  })
})
