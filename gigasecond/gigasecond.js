//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const milliseconds = date.getTime() + 10e11;
  return new Date(milliseconds);
};
