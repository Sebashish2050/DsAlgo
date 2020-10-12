const array1 = [ { node: 'Media', name: 'picture', children: [] },
{ node: 'CatalogVersion', name: 'catalogVersion', children: [] },
{ node: 'Category', name: 'supercategories', children: [] } ];

const array2 = [ { node: 'Product', name: 'baseProduct', children: [] },
{ node: 'Media', name: 'picture', children: [] },
{ node: 'CatalogVersion', name: 'catalogVersion', children: [] },
{ node: 'Category', name: 'supercategories', children: [] } ];

function removeDuplicate() {
var newArr = array1.concat(array2);
console.log('newArr:: ', newArr);
var filter = newArr.filter((node, index, self) =>
  self.findIndex((item) => (
    item.node === node.node && item.name === node.name
  )) === index
)

console.log('filter:: ', filter);
}
removeDuplicate();