const test = require('tape');
const arrayMap = require('../dist/arrayMap');
const defTree = {
  type: 'component',
  name: 'Each',
  attribs: { },
  children: [{ type: 'tag', name: 'div' }]
};

test('tree.arrayMap(a, 0) :: with attribs.as', function(t) {
  const tree = Object.assign({ }, defTree, {  
    attribs: { 
      data: ['a', 'b', 'c'],
      as: 'letter' 
    }
  });
  const res = arrayMap.call(tree, 'b', 1);

  t.plan(4);
  t.equal(res.type, 'frame');
  t.equal(res.locals['@index'], 1);
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['letter'], 'b');
});