import { createFrame } from 'rogain-utils';
export default function objectMap(key, i) {
  var locals = {
    '@key': key, 
    '@index': i,
    '@length': Object.keys(this.attribs.data).length
  };

  locals[this.attribs.as || '@item'] = this.attribs.data[key];

  return createFrame(this.children, locals);
}