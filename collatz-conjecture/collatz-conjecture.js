//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number, step = 0) => {
  if (greaterThanZero(number)) {
    if (number === 1) {
      return step;
    }
    return steps(conjecture(number), step + 1);
  } else {
    throw new Error('Only positive numbers are allowed');
  }
};

const greaterThanZero = (number) => number > 0;

const conjecture = (number) => number % 2 === 0 ? number / 2 : number * 3 + 1;