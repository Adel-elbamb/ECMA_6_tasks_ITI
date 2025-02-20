class Shape {
    constructor(name) {
        if (new.target === Shape) { // Corrected abstract class check
            throw new Error("Cannot create an instance of abstract class Shape");
        }
        this.name = name;
    }

    area() {  // Changed method name to camelCase
        throw new Error("area() must be implemented in subclass");
    }

    perimeter() {
        throw new Error("perimeter() must be implemented in subclass");
    }

    toString() {
        return `Shape: ${this.name}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

export class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }

    area() {  // Changed method name
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}

export class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

