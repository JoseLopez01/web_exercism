//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const divisible = (number, divisor) => !(number % divisor);

export const isLeap = (year) => {
  const divisibleByFour = divisible(year, 4);
  return divisible(year, 100) ? divisibleByFour && divisible(year, 400) : divisibleByFour;
};
