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

class Line {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  median() {
    let mx = (this.a.x + this.b.x) / 2
    let my = (this.a.y + this.b.y) / 2

    return new Point(mx, my)
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  getAB() {
    return new Line(this.a, this.b)
  }


  getBC() {
    return new Line(this.b, this.c)
  }


  getAC() {
    return new Line(this.a, this.c)
  }
}

let tri = new Triangle(
  new Point(10, 15),
  new Point(15, 15),
  new Point(15, 30)
)

tri.a.print()
tri.b.print()
tri.c.print()

console.log(tri.getAB())
