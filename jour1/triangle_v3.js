//coord est un objet qui contient les propriétés x et y

class Point {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  print() {
    console.log(`(${this.x},${this.y})`)
  }

  // add
  add(point) {
    this.x += coord.x
    this.y += coord.y
  }

  // substract
  substract(point) {
    this.x -= coord.x
    this.y -= coord.y
  }

  // multiply
  multiply(number) {
    this.x *= number
    this.y *= number
  }

  // divide
  divide(number) {
    if (num === 0) {
      return
    }

    this.x /= number
    this.y /= number
  }
}

class Figure {
  constructor() {
    this.points = []
  }

  addPoint(point) {
    thid.points.push(point)
  }
}
