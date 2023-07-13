// class Shape {
//     constructor() {
//         this.color = "";
//     }

//     setColor(colorVar) {
//         this.color = colorVar;
//     }

// }

// class Triangle extends Shape {
//     //constructor(color) {
//         //super(color);
//         //this.name = 'Triangle';
    

//     //draw() {
//     render() {    
//         return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
//     }
// }

// class Circle extends Shape {
//     // constructor(color) {
//     //     super(color);
//     //     this.name = 'Circle';
    

//     render() {
//         return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
//     }
// }

// class Square extends Shape {
//     // constructor(color) {
//     //     super(color);
//     //     this.name = 'Square';
//     // }

//     render() {
//         return `<rect width="100" height="100" fill="${this.color}" />`;
//     }
// }

// module.exports = {Triangle, Circle, Square};

class Circle {
    constructor(color, textColor) {
        this.color = color;
        this.textColor = textColor;
    }

    render(text) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="${this.textColor}">${text}</text>
    </svg>`;
    }
}

class Square {
    constructor(color, textColor) {
        this.color = color;
        this.textColor = textColor;
    }
    render(text) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="${this.textColor}">${text}</text>
      </svg>`;
    }
}

class Triangle {
    constructor(color, textColor) {
      this.color = color;
      this.textColor = textColor;
    }
  
    render(text) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="${this.textColor}">${text}</text>
        </svg>`;
    }
  }

  module.exports = {Circle, Square, Triangle};