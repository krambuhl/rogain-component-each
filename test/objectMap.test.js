var test = require('tape');
var objectMap = require('../dist/objectMap');

const defTree = {
  type: 'component',
  name: 'Each',
  attrs: { },
  children: [{ type: 'tag', name: 'div' }]
};

test('tree.objectMap(key:b, 2)', function(t) {
  t.plan(4);

  var tree = Object.assign({ }, defTree, { 
    attrs: {
      data: { a: 'aaa', b: 'bbb', c: 'ccc' }
    }
  });

  var res = objectMap.call(tree, 'b', 1);

  t.equal(res.type, 'frame');
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['@key'], 'b');
  t.equal(res.locals['@item'], 'bbb');
});
