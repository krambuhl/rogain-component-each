import arrayMap from './arrayMap';
import objectMap from './objectMap';

export default function Each(tree, props) {
  if (Array.isArray(tree.data)) {
    return tree.data.map(arrayMap, tree);
  } else if (typeof tree.data === 'object') {
    return Object.keys(tree.data).map(objectMap, tree);
  }
}