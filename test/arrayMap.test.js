var test = require('tape');
var arrayMap = require('../dist/arrayMap');

const defTree = {
  type: 'component',
  name: 'Each',
  attrs: { },
  children: [{ type: 'tag', name: 'div' }]
};

test('tree.arrayMap(a, 0) :: with attrs.as', function(t) {
  t.plan(4);

  var tree = Object.assign({ }, defTree, { 
    data: ['a', 'b', 'c'], 
    attrs: { as: 'letter' }
  });

  var res = arrayMap.call(tree, 'b', 1);

  t.equal(res.type, 'frame');
  t.equal(res.locals['@index'], 1);
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['letter'], 'b');
});