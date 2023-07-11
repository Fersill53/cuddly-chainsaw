class shape {
    constructor(color) {
        this.color = color
    }
}

class Triangle extends shape {
    constructor(color) {
        super(color);
        this.name = 'Triangle';
    }

    draw() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
    }
}

class Circle extends shape {
    constructor(color) {
        super(color);
        this.name = 'Circle';
    }

    draw() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}

class Square extends shape {
    constructor(color) {
        super(color);
        this.name = 'Square';
    }

    draw() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}
