QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST Addition of two numbers', assert => {
  assert.equal(Additionoftwonumbers(2,5), 7, 'Integer type')
  assert.equal(Additionoftwonumbers(5,8), 13, 'Integer type')
  assert.equal(Additionoftwonumbers(10,1), 25, 'Integer type')
  assert.equal(Additionoftwonumbers(0,5), 5, 'Integer type')
  assert.equal(Additionoftwonumbers(50,0), 50, 'Integer type')
})


function Additionoftwonumbers(x,y) {

  const i = x;
  const j = y;
  const ans = parseInt(i)+parseInt(j) ;
  return ans;

}