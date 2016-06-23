const test = require('tape');
const objectMap = require('../dist/objectMap');
const defTree = {
  type: 'component',
  name: 'Each',
  attribs: { },
  children: [{ type: 'tag', name: 'div' }]
};

test('tree.objectMap(key:b, 2)', function(t) {
  const tree = Object.assign({ }, defTree, { 
    attribs: {
      data: { a: 'aaa', b: 'bbb', c: 'ccc' }
    }
  });

  const res = objectMap.call(tree, 'b', 1);

  t.plan(4);
  t.equal(res.type, 'frame');
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['@key'], 'b');
  t.equal(res.locals['@item'], 'bbb');
});
