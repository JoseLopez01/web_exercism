//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    if (this.verifyQuality() && this.notZeros()) {
      const firstSide = this.sides[0];
      return this.sides.every((side) => side === firstSide);
    }
    return false;
  }

  get isIsosceles() {
    if (this.verifyQuality() && this.notZeros()) {
      return this.sides
        .map(
          (currentSide) => this.sides.indexOf(currentSide) !== this.sides.lastIndexOf(currentSide)
        )
        .some((atLeastTwice) => atLeastTwice);
    }
    return false;
  }

  get isScalene() {
    if (this.verifyQuality() && this.notZeros()) {
      return this.sides
        .map(
          (currentSide) => this.sides.indexOf(currentSide) === this.sides.lastIndexOf(currentSide)
        )
        .every((isOnce) => isOnce);
    }
    return false;
  }

  verifyQuality() {
    const [firstSide, secondSide, ThirdSide] = this.sides.sort();
    return firstSide + secondSide >= ThirdSide;
  }

  notZeros() {
    return this.sides.every((side) => side > 0);
  }
}
