// Add your Circle class here
class Circle {
    constructor(radius) {
    this.radius = radius;
    const piValue = Math.PI;
}
// Getter for diameter
get diameter() {
    return this.radius * 2;
  }

  // Setter for diameter
  set diameter(value) {
    this.radius = value / 2;
  }

  // Getter for circumference
  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  // Setter for circumference
  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  // Getter for area
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Setter for area
  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}



