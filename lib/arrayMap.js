import { createFrame } from 'rogain-utils';
export default function arrayMap(item, i) {
  var locals = {
    '@index': i,
    '@length': this.attrs.data.length
  };

  locals[this.attrs.as || '@item'] = item;

  return createFrame(this.children, locals);
}