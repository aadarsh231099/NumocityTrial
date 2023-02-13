const {expect} = require('chai');
const print_color_map = require('../misaligned/color_map');


const result=print_color_map();

const expected = [
  '1  | White  | Blue',
  '2  | White  | Orange',
  '3  | White  | Green',
  '4  | White  | Brown',
  '5  | White  | Slate',
  '6  | Red    | Blue',
  '7  | Red    | Orange',
  '8  | Red    | Green',
  '9  | Red    | Brown',
  '10 | Red    | Slate',
  '11 | Black  | Blue',
  '12 | Black  | Orange',
  '13 | Black  | Green',
  '14 | Black  | Brown',
  '15 | Black  | Slate',
  '16 | Yellow | Blue',
  '17 | Yellow | Orange',
  '18 | Yellow | Green',
  '19 | Yellow | Brown',
  '20 | Yellow | Slate',
  '21 | Violet | Blue',
  '22 | Violet | Orange',
  '23 | Violet | Green',
  '24 | Violet | Brown',
  '25 | Violet | Slate',
];


describe('print_color_map', function() {
  it('no of entries in manual should be 25', function() {
    console.log(result);
    expect(result.length).equals(25);
  });
  it('given output should be same as expected output', function() {
    expect(result).deep.equals(expected);
  });
});
