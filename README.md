VarString
---

VarString is a simple node.js library for inserting variables into a string. Great for generating configuration files!

#Example

```
var varstring = require("varstring")

/*Args*/
varstring("{0}+{1}={2}",1,2,3) //1+2=3
varstring("{0} {2}","node.js is really","bad","awesome") //nodejs is really awesome

/*Array*/
varstring("{0}+{1}={2}",[1,2,3]) //1+2=3
varstring("{0} {2}",["node.js is really","bad","awesome"]) //nodejs is really awesome
```

#Method Signatures
###varstring(string,[var0,...])
`string` is any string containing any variable of the form `{i}` where `i` corresponds to the i'th element of the array of `var`s.
###varstring(string,var0,...)
`string` is any string containing any variable of the form `{i}` where `i` corresponds to i'th `var` argument
