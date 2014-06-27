var varstring = require("../index.js")

/*Args*/
var string = varstring("{0}+{1}={2}",1,2,3) //1+2=3
console.log(string)
string = varstring("{0} {2}","node.js is really","bad","awesome") //nodejs is really awesome
console.log(string)

/*Array*/
string = varstring("{0}+{1}={2}",[1,2,3]) //1+2=3
console.log(string)
string = varstring("{0} {2}",["node.js is really","bad","awesome"]) //nodejs is really awesome
console.log(string)
