class Shape {
    constructor() {
        this.color = "";
    }

    setColor(colorVar) {
        this.color = colorVar;
    }

}

class Triangle extends Shape {
    //constructor(color) {
        //super(color);
        //this.name = 'Triangle';
    

    //draw() {
    render() {    
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    // constructor(color) {
    //     super(color);
    //     this.name = 'Circle';
    

    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    // constructor(color) {
    //     super(color);
    //     this.name = 'Square';
    // }

    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Circle, Square};