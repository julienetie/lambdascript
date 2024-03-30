import { expect } from 'chai'
import { safe, empty } from '../../lambdascript.js'

describe('safe utilities', () => {
  it('safe.str should return the string value', () => {
    const stringValue = 'test string'
    expect(safe.str(stringValue)).to.equal(stringValue)
  })

  it('safe.str should return placeholder string if value is not a string', () => {
    const nonStringValue = 123
    const placeholder = 'default value'
    expect(safe.str(nonStringValue, placeholder)).to.equal(placeholder)
  })

  it('safe.str should call and return the result of placeholder function', () => {
    const nonStringValue = null
    const placeholderFunction = (value) => `Value is: ${value}`
    expect(safe.str(nonStringValue, placeholderFunction)).to.equal(`Value is: ${nonStringValue}`)
  })

  it('safe.str should return empty string if placeholder function result is not a string', () => {
    const nonStringValue = {}
    const placeholderFunction = (value) => value
    expect(safe.str(nonStringValue, placeholderFunction)).to.equal(empty)
  })

  // Tests for safe.numeric

  it('safe.numeric should return the numeric value if it is a number and not NaN', () => {
    const numericValue = 3.14
    expect(safe.numeric(numericValue)).to.equal(numericValue)
  })

  it('safe.numeric should return placeholder string if value is not a number or NaN', () => {
    const nonNumericValue = 'not a number'
    const placeholder = 0
    expect(safe.numeric(nonNumericValue, placeholder)).to.equal(placeholder)
  })

  it('safe.numeric should call and return the result of placeholder function if provided', () => {
    const nonNumericValue = true
    const placeholderFunction = (value) => value * 2
    expect(safe.numeric(nonNumericValue, placeholderFunction)).to.equal(2) // true * 2
  })

  it('safe.numeric should return empty string if placeholder function result is not a number or NaN', () => {
    const nonNumericValue = {}
    const placeholderFunction = (value) => 'not a number'
    expect(safe.numeric(nonNumericValue, placeholderFunction)).to.equal(empty)
  })

  // Tests for safe.int

  it('safe.int should return the integer value if it is an integer', () => {
    const intValue = 10
    expect(safe.int(intValue)).to.equal(intValue)
  })

  it('safe.int should return placeholder string if value is not an integer', () => {
    const nonIntValue = 3.14
    const placeholder = 0
    expect(safe.int(nonIntValue, placeholder)).to.equal(placeholder)
  })

  it('safe.int should call and return the result of placeholder function if provided', () => {
    const nonIntValue = '5'
    const placeholderFunction = (value) => parseInt(value, 10)
    expect(safe.int(nonIntValue, placeholderFunction)).to.equal(5)
  })

  it('safe.int should return empty string if placeholder function result is not an integer', () => {
    const nonIntValue = {}
    const placeholderFunction = (value) => value.toString()
    expect(safe.int(nonIntValue, placeholderFunction)).to.equal(empty)
  })
})
