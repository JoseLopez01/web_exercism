//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const divisible = (number, divisor) => !(number % divisor);

export const isLeap = (year) => divisible(year, 100) ? divisible(year, 4) && divisible(year, 400) : divisible(year, 4);
