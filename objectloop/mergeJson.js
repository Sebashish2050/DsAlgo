const fileObj = require('./apparelFileFullObj.json');
const apparelObj = require('./apparelFile.json');

function mergeNarvarOrderJson(orderJson, updatedOrderJson) {
  if(orderJson.items && Array.isArray(orderJson.items)) {
    if(updatedOrderJson.items && Array.isArray(updatedOrderJson.items)) {
      const finalJsonItems = [...orderJson.items, ...updatedOrderJson.items];
      orderJson.items = finalJsonItems;
    }
  }

  return orderJson;
};

const json = mergeNarvarOrderJson(fileObj, apparelObj);
// console.log('json: ', json);
module.exports = {
  json: json
};
