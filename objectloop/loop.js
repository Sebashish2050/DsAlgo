const fileObj = require('./file.json');
const apparelObj = require('./apparelFile.json');
const singleJson = require('./single.json');
const apparelFileFullObj = require('./apparelFileFullObj.json');
const mergedJson = require('./mergeJson');

function addChildrenToChildNode(item, children) {
  item.attributes.forEach(attribute => {
    if(attribute.returnIntegrationObjectItem && attribute.returnIntegrationObjectItem.code) {
      const childNode = {
        node: attribute.returnIntegrationObjectItem.code,
        name: attribute.attributeName,
        children: [],
      };
      children.push(childNode)
    }
  });
}

function createInitialJsonTree(obj) {
  const simplifiedIntObjs = {
    node: 'root',
    children:[]
  };

  obj.items.forEach(item => {
    const childNode = {
      node: item.code,
      children: []
    };
    addChildrenToChildNode(item, childNode.children);
    simplifiedIntObjs.children.push(childNode);
  });
  return simplifiedIntObjs;
}

const rootObj = createInitialJsonTree(mergedJson.json);

// console.log('Root object: ', JSON.stringify(rootObj));

function removeDuplicates(duplicateChildren, originalChildren) {
  const finalChildren = duplicateChildren.concat(originalChildren);
  console.log('finalChildren:: ', finalChildren);
  const filteredChildren = finalChildren.filter((node, index, self) =>
    self.findIndex((item) => (
      item.node === node.node && item.name === node.name
    )) === index
  )
  
  console.log('filter:: ', filteredChildren);
  return filteredChildren;
}

function mergeInitialJsonIntoSingleParenNode(rootObj) {
  var output = [];
  if(rootObj && rootObj.children) {
    rootObj.children.forEach(function(item) {
      var existing = output.filter(function(v, i) {
        return v.node === item.node;
      });
      if (existing.length) {
        var existingIndex = output.indexOf(existing[0]);
        const finalChildren = removeDuplicates(output[existingIndex].children, item.children);
        // console.log('finalChildren:: ', finalChildren);
        output[existingIndex].children = finalChildren;
      } else {
        output.push(item);
      }
    });
  }
  
  rootObj.children = output;
}

mergeInitialJsonIntoSingleParenNode(rootObj);

console.log('Root object: ', JSON.stringify(rootObj));

function removeDuplicateChildren(childrenNode, replaceChildrenNode) {
  const returnArr = [];
  replaceChildrenNode.forEach(item => {
    let ifFound = false;
    childrenNode.forEach(arrVal => {
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

function mergeChildren(rootObj, replaceNode, replaceNodeChildren) {
  if(rootObj.children && rootObj.children.length > 0) {
    rootObj.children.forEach(child => {
      const node = child.node;
      const name = child.name;
      if(node && name && node === replaceNode) {
        const children = child.children;
        // console.log(`node: ${node}, name: ${node}, children: ${JSON.stringify(children)}, ReplaceNodeChildren: ${JSON.stringify(replaceNodeChildren)}`);
        const finalChildrenList = removeDuplicateChildren(children, replaceNodeChildren)
        children.push(...finalChildrenList);
        // console.log(`finalChildrenList: ${JSON.stringify(finalChildrenList)}`);
        // console.log(`After push node: ${node}, name: ${node}, children: ${JSON.stringify(children)}`);
      }
      mergeChildren(child, replaceNode, replaceNodeChildren);
    });
  }
}

function mergeNodes(rootObj, index, childNode, childNodeChildren){
  if(childNode && childNode !== 'Order') {
    rootObj.children.splice(index, 1);
  }

  if(childNode && childNodeChildren) {
    mergeChildren(rootObj, childNode, childNodeChildren);
  }

  rootObj.children.forEach((child, i) => {
    if(child.node !== 'Order') {
      const replaceNode = child.node;
      const replaceChildren = child.children;
      mergeNodes(rootObj, i, replaceNode, replaceChildren);
    }
  });
}

console.time('merge');
mergeNodes(rootObj);
console.timeEnd('merge');

// console.log('rootObj2: ', JSON.stringify(rootObj));

function deleteKeysFromStackRef(stack, stackRef) {
  for(const key in stackRef) {
    if(stackRef[key] === 0) {
      stack.pop();
      delete stackRef[key];
      stackRef[stack[stack.length-1]]--;
      deleteKeysFromStackRef(stack, stackRef);
    }
  }
}

function getAllTheChildren(child, stack, stackRef, expand) {
  if(child.children.length === 0 || !stackRef[child.name] || stackRef[child.name] === 0) {
    // console.log(`stack: ${stack} & stackRef: ${JSON.stringify(stackRef)}`);
    expand.push(stack.join('/'));
    deleteKeysFromStackRef(stack, stackRef);
  } else {
    child.children.forEach(childNode => {
        stack.push(childNode.name);
        stackRef[childNode.name] = childNode.children.length;
        getAllTheChildren(childNode, stack, stackRef, expand);
    })
  }

  return expand;
}

function prepareExpandParams(orderObj) {
  console.time('prepare');
  let expandParams = '';
  const orders = orderObj.children;
  if(orders.length === 1) {
    if(orders[0].node === 'Order') {
      const orderChildren = orders[0].children;
      const childrenLen = orderChildren.length;
      orderChildren.forEach((item, i) => {
        const stack = [];
        const stackRef = {};
        if(item.children.length > 0) {
          stack.push(item.name);
          stackRef[item.name] = item.children.length;
            const expands = getAllTheChildren(item, stack, stackRef, []);
            if(childrenLen-1 === i) {
              expandParams += expands.join(',');
            } else {
              expandParams += expands.join(',') + ',';
            }
        } else {
          if(childrenLen-1 === i) {
            expandParams += item.name;
          } else {
            expandParams += item.name + ',';
          }
        }
      });
    }
  }
  console.timeEnd('prepare');
  return expandParams;
}

const expandParams = prepareExpandParams(rootObj);

console.log('expand::: ', expandParams);
