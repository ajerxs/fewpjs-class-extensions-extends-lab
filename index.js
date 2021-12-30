class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((previousValue, currentValue ) => previousValue + currentValue, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let sideOne = this.sides[0];
            let sideTwo = this.sides[1];
            let sideThree = this.sides[2];
            return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne));
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    
}