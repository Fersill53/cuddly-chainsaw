
// const {Triangle, Circle, Square} = require("../Library/shapes");

// test('Triangle should have red background', () => {
//     const triangle = new Triangle('red');
//     expect(triangle.render()).toBe('<polygon points=\"50,0 0,100 100,100\" fill=\"red"\ />');
// });

const {Circle, Square, Triangle} = require("../Library/shapes");

describe('Circle', () => {
    test('render() should generate SVG with circle and text', () => {
      const circle = new Circle('red');
      const text = 'Test Text';
      const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="black">${text}</text>
      </svg>`.replace(/\s/g, '');
  
      expect(circle.render(text).replace(/\s/g, '')).toBe(expectedSVG);
    });
  });

  describe('Square', () => {
    test('render() should generate SVG with square and text', () => {
      const square = new Square('blue');
      const text = 'Test Text';
      const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="blue" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="black">${text}</text>
      </svg>`.replace(/\s/g, '');
  
      expect(square.render(text).replace(/\s/g, '')).toBe(expectedSVG);
    });
  });

  describe('Triangle', () => {
    test('render() should generate SVG with triangle and text', () => {
      const triangle = new Triangle('green');
      const text = 'Test Text';
      const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height=100">
      <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="green" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="black">${text}</text>
    </svg>`.replace(/\s/g, '');

    expect(triangle.render(text).replace(/\s/g, '')).toBe(expectedSVG);
  });
});