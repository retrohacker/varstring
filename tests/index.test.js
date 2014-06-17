var varstring = require('../index.js')
var test = require('tape')

test("Param Array",function(t) {
  var s1 = varstring("{0}+{1}={2}",[2,3,5])
  var s2 = varstring("{0} {2}",["nodejs is really","bad","awesome"])
  t.equal(s1,"2+3=5","array of numbers")
  t.equal(s2,"nodejs is really awesome","array of strings")
  t.end()
})

test("Arbitrary args",function(t) {
  var s1 = varstring("{0}+{1}={2}",2,3,5)
  var s2 = varstring("{0} {2}","nodejs is really","bad","awesome")
  t.equal(s1,"2+3=5","array of numbers")
  t.equal(s2,"nodejs is really awesome","array of strings")
  t.end()
})
