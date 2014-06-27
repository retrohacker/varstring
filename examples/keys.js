var varstring = require("../index.js")

var array = new Array()
array["username"] = "grace"
array["password"] = "hopper"

/*Args*/
var string = varstring("{username} : {password}",array)
console.log(string)
