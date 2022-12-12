// const { it } = require('node:test');
// const { describe } = require('yargs');
// const reverseString = require('./reverseString');
import { reverseString } from './reverseString';

describe('Tests for reversed strings', () => {
  it('reversed string "Hello" to equal "olleH"', () => {
    expect(reverseString('Hello')).toBe('olleH');
  }),
  it('reversed string "Red roses" to equal "sesor deR"', () => {
    expect(reverseString('Red roses')).toBe('sesor deR');
  }),
  it('reversed string "Well done!" to equal "!enod lleW"', () => {
    expect(reverseString('Well done!')).toBe('!enod lleW');
  })
})

// test('reversed string "Hello" to equal "olleH"', () => {
//   expect(reverseString('Hello')).toBe('olleH');
// });