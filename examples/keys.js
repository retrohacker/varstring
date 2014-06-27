var varstring = require("../index.js")

var array = new Array()
array["username"] = "grace"
array["password"] = "hopper"

/* Array w/ Keys */
var string = varstring("{username} : {password}",array)
console.log(string)

/* Object */
var obj = {}
obj.username = "grace"
obj.password = "hopper"

var string = varstring("{username} : {password}",obj)
console.log(string)
