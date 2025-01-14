//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	getArea(){
		let areaOfRectangle = this.width * this.height;
		return areaOfRectangle;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
		this.side = side;
	}
	getPerimeter(){
		let perimeter = 4 * this.side;
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
