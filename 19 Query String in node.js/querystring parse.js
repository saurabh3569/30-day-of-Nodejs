// Including the required modules
const qs = require('querystring')
// producing a URL from a collection of key and value pairs
var value_json = qs.stringify({ id: 1, name: ['abc', 'sam'], tutorial: '30days of node', creator : 'saurabh' });
console.log(value_json); 

var value_json_2 = qs.stringify({ id: 2, name: ['def', 'sunny'], tutorial: '30days of node', creator : 'saurabh' },';');
console.log("Changing the default 'sep' from '&' to ';'. An example is shown below:");
console.log(value_json_2); 

var value_json_3 = qs.stringify( {id: 3, name: ['hij', 'rahul'], tutorial: '30days of node', creator : 'saurabh' },';',':');
console.log("Changing the default 'eq' from '=' to ':'. An example is shown below:")
console.log(value_json_3);