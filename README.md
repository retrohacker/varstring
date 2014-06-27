VarString
---

VarString is a simple node.js library for inserting variables into a string. Great for generating configuration files!

[![Build Status](https://travis-ci.org/wblankenship/varstring.svg?branch=master)](https://travis-ci.org/wblankenship/varstring)

[![NPM](https://nodei.co/npm/varstring.png)](https://nodei.co/npm/varstring/)

#Example

```
var varstring = require("varstring")

/*Args*/
varstring("{0}+{1}={2}",1,2,3) //1+2=3
varstring("{0} {2}","node.js is really","bad","awesome") //nodejs is really awesome

/*Array*/
varstring("{0}+{1}={2}",[1,2,3]) //1+2=3
varstring("{0} {2}",["node.js is really","bad","awesome"]) //nodejs is really awesome

/* Array w/ Keys */

var array = new Array()
array["username"] = "grace"
array["password"] = "hopper"

var string = varstring("{username} : {password}",array)
console.log(string)

/* Object */
var obj = {}
obj.username = "grace"
obj.password = "hopper"

var string = varstring("{username} : {password}",obj)
console.log(string)
```

#Method Signatures
###varstring(string,{"key":"val",...})
`string` is any string containing any variable of the form `{key}` where `key` corresponds to a key that belongs to the object passed as an argument.
###varstring(string,[var0,...])
`string` is any string containing any variable of the form `{i}` where `i` corresponds to the i'th element of the array of `var`s.
###varstring(string,var0,...)
`string` is any string containing any variable of the form `{i}` where `i` corresponds to i'th `var` argument

#Undefined behavior
Passing in a series of *objects* to be inserted into variables within a string is untested and unsupported. It may cause problems with the algorithm determining if the passed in argument(s) is/are a series of values, an array, or an object. It also will likely result in `[Object]` being inserted into the string. Use at your own risk.
