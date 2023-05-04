
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
		this.a = a
		this.b= b
		this.c = c
	}
	getAB(){
		return new Line (this)
	}
}

let tri = new Triangle
 new Point (14,13) 
 new Point  (155)
 new Point  (18,8) 
 
 
 tri.a.print()
 tri.b.print()
 tri.c.print()

 console.log(tri.getAB());
	
