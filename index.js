module.exports = function(string,params) {
  if(params instanceof Object) {
    //do nothing
  }
  else if(!(params instanceof Array)) {
    params = Array.prototype.slice.call(arguments)
    string = params.shift()
  }

  Object.keys(params).forEach(function(v) {
    string = string.replace(new RegExp(escapeRegExp("{"+v+"}"),'g'),params[v])
  })
  return string
}

escapeRegExp = function(s) {
  return s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}
