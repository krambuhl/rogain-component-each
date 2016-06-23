const test = require('tape');
const Each = require('../dist');
const Component = {
  type: 'component',
  name: 'Each',
  attribs: { },
  children: [{ type: 'tag', name: 'div' }]
};

test('<Each data={undefined}><div /></Each>', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: undefined }
  });

  const res = Each(tree);

  t.plan(1);
  t.equal(res === undefined, true);
});

test('<Each data={emptyArray}><div /></Each>', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: [] }
  });

  const res = Each(tree);

  t.plan(1);
  t.equal(res.length, 0);
});

test('<Each data={emptyObject}><div /></Each>', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: { } }
  });

  const res = Each(tree);

  t.plan(1);
  t.equal(res.length, 0);
});

test('<Each data={nonEmptyArray}><div /></Each>', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: ['a', 'b', 'c'] }
  });

  const res = Each(tree);

  t.plan(11);
  t.equal(res.length, 3);
  t.equal(res[0].type, 'frame');
  t.equal(res[0].locals['@index'], 0);
  t.equal(res[0].locals['@item'], 'a');
  t.equal(res[0].locals['@length'], res.length);
  t.equal(res[0].children[0].type, 'tag');
  t.equal(res[0].children[0].name, 'div');
  t.equal(res[1].locals['@index'], 1);
  t.equal(res[1].locals['@item'], 'b');
  t.equal(res[2].locals['@index'], 2);
  t.equal(res[2].locals['@item'], 'c');
});

test('<Each data={nonEmptyObject}><div /></Each>', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: { a: 'aaa', b: 'bbb', c: 'ccc' } }
  });

  const res = Each(tree);

  t.plan(13);
  t.equal(res.length, 3);
  t.equal(res[0].type, 'frame');
  t.equal(res[0].locals['@index'], 0);
  t.equal(res[0].locals['@key'], 'a');
  t.equal(res[0].locals['@length'], res.length);
  t.equal(res[0].children[0].type, 'tag');
  t.equal(res[0].children[0].name, 'div');
  t.equal(res[1].locals['@index'], 1);
  t.equal(res[1].locals['@key'], 'b');
  t.equal(res[1].locals['@item'], 'bbb');
  t.equal(res[2].locals['@index'], 2);
  t.equal(res[2].locals['@key'], 'c');
  t.equal(res[2].locals['@item'], 'ccc');
});


const arrayMap = require('../dist/arrayMap');
test('tree.arrayMap(a, 0) :: with attribs.as', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { as: 'letter', data: ['a', 'b', 'c'] }
  });

  const res = arrayMap.call(tree, 'b', 1);

  t.plan(4);
  t.equal(res.type, 'frame');
  t.equal(res.locals['@index'], 1);
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['letter'], 'b');
});

const objectMap = require('../dist/objectMap');
test('tree.objectMap(key:b, 2)', function(t) {
  const tree = Object.assign({ }, Component, { 
    attribs: { data: { a: 'aaa', b: 'bbb', c: 'ccc' } }
  });

  const res = objectMap.call(tree, 'b', 1);

  t.plan(4);
  t.equal(res.type, 'frame');
  t.equal(res.locals['@length'], 3);
  t.equal(res.locals['@key'], 'b');
  t.equal(res.locals['@item'], 'bbb');
});
