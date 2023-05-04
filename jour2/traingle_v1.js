 /*let coord ={
	x:45,
	y:32,

	print :function(){
		console.log(`(${this.x},${this.y})`);
	}
}*/
class Point{
	constructor(x,y){
    this.x =x
	this.y =y
	}
	print(){
		console.log(`(${this.x},${this.y})`)	
	}
	// add
	add(coord){
	 this.x += coord.x
	 this.y += coord.y
	}

	//substract
	substract(coord){
		this.x -= coord.x
		this.y -= coord.y
	}

	// multiply
	multiply(coord){
		this.x *= coord.x
		this.y *= coord.y
	}
	// divide
	divide(num){
		if(num.x ===0 || num.y === 0){
         return
		}
		this.x /= num
		this.y /= num.y
	}
}

class Line {
	constructor(a,b){
		this.a = a
		this.b = b
	}
    median (){
		// mx = (ax + bx) /2
	    // my = (ay + by) /2
	 let mx = (this.a.x + this.b.x) /2
	 let    my =(this.a.x + this.b.x) /2
	
	 return new Point ( mx, my)
	}
}
class Triangle {
	constructor(ab , bc, ac ){
		this.ab = ab
		this.bc = bc
		this.ac = ac
	}
}

 let l1 = new Line (new Point (5,7),new Point (14,13) )
 let l2 = new Line (new Point (14,13),new Point (18,8) )
 let l3 = new Line(new Point(5, 7), new Point(18, 8))

 let tri = new Triangle(l1, l2, l3)
 
 tri.ab.a.print()
 tri.ab.b.print()
 tri.ab.b.print()
	
/*let c1 = new Coord(10,15)
let c2 = new Coord(7,3)
c1.add(c2)
c1.substract(c2)
c1.multiply(c2)
c2.divide(c1)
c1.print()*/