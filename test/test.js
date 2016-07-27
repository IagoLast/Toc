const toc = require('../lib/commonJS/toc.js');
const assert = require('assert');

describe('render', () => {
  it('Should return the same string when no data is given', () => {
    assert.equal(toc.render('hello world'), 'hello world');
  });
  it('Should return the same string when empty data is given', () => {
    assert.equal(toc.render('hello world', {}), 'hello world');
  });
  it('Should replace one token correctly', () => {
    assert.equal(toc.render('hello {{name}}', { name: 'iagolast' }), 'hello iagolast');
  });
  it('Should replace two tokens correctly', () => {
    assert.equal(toc.render('hello {{name}}, by {{name}}', { name: 'iagolast' }), 'hello iagolast, by iagolast');
  });
  it('Should replace three tokens correctly', () => {
    assert.equal(toc.render('hello {{name}}, by {{name}}, {{name}}?', { name: 'iagolast' }), 'hello iagolast, by iagolast, iagolast?');
  });
})
