var varstring = require("./index.js")

/*Args*/
varstring("{0}+{1}={2}",1,2,3) //1+2=3
varstring("{0} {2}","node.js is really","bad","awesome") //nodejs is really awesome

/*Array*/
varstring("{0}+{1}={2}",[1,2,3]) //1+2=3
varstring("{0} {2}",["node.js is really","bad","awesome"]) //nodejs is really awesome
