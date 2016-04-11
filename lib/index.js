import arrayMap from './arrayMap';
import objectMap from './objectMap';

export default function Each(tree, props) {
  var attrs = tree.attrs || { };
  if (attrs.data === undefined) return; 
  if (Array.isArray(attrs.data)) {
    return attrs.data.map(arrayMap, tree);
  } else if (typeof attrs.data === 'object') {
    return Object.keys(attrs.data).map(objectMap, tree);
  }
}