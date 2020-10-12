var children = [{"node":"Media","name":"picture","children":[]},{"node":"Media2","name":"picture2","children":[]},{"node":"Media1","name":"picture1","children":[]},{"node":"CatalogVersion1","name":"catalogVersion1","children":[]}];
var ReplaceNodeChildren = [{"node":"Media","name":"picture","children":[]},{"node":"Media1","name":"picture1","children":[]},{"node":"CatalogVersion1","name":"catalogVersion1","children":[]}];


function removeAllDuplicateElementsFromArr2(arr1, arr2) {
  const returnArr = [];
  arr1.forEach(item => {
    let ifFound = false;
    arr2.forEach(arrVal => {
      if(arrVal.node === item.node) {
        ifFound = true;
      }
    });
    if(!ifFound) {
      returnArr.push(item);
    }
  });

  return returnArr;
}

var finalChildrenList = removeAllDuplicateElementsFromArr2(children, ReplaceNodeChildren);

console.log('finalChildrenList: ', finalChildrenList);