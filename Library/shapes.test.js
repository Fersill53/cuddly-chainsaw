
const {Triangle, Circle, Square} = require("../Library/shapes");

test('Triangle should have red background', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points=\"50,0 0,100 100,100\" fill=\"red"\ />');
});
