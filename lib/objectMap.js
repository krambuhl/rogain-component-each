import { createFrame } from 'rogain-utils';
export default function objectMap(key, i) {
  var locals = {
    '@key': key, 
    '@index': i,
    '@length': Object.keys(this.data).length
  };

  locals[this.attrs.as || '@item'] = this.data[key];

  return createFrame(this.children, locals);
}