import { createFrame } from 'rogain-utils';
export default function arrayMap(item, i) {
  var locals = {
    '@index': i,
    '@length': this.attribs.data.length
  };

  locals[this.attribs.as || '@item'] = item;

  return createFrame(this.children, locals);
}
