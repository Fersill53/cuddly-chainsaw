const Triangle = require('../Library/shapes').Triangle;

test('Triangle should retrun correct SVG', ()=> {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="50,0 0,100 100,100" fill=\"red\" />');
});