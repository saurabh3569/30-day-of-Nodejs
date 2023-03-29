// Including the required modules   
const qs = require('querystring')
// parsing a URL query string to a collection of key and value pairs
var value_json = qs.parse('id=1&name=sam&name=raj&tutorial=30daysofnode&creator=saurabh')
console.log(value_json);  

var value_json_2 = qs.parse('id%2&name%reij&name%raj2&tutorial%30daysofnode&creator%saurabh','&','%');
console.log("Changing the default 'eq' from '=' to '%'. An example is shown below:");
console.log(value_json_2); 

var value_json_3 = qs.parse('id%3#name%emily#name%raj3#tutorial%30daysofnode#creator%saurabh','#','%');
console.log("Changing the default Separator 'sep' from '&' to '#'. An example is shown below:")
console.log(value_json_3);
