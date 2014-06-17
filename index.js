module.exports = function(string,params) {
  if(!(params instanceof Array)) {
    params = Array.prototype.slice.call(arguments)
    string = params.shift()
  }

  params.forEach(function(v,i) {
    string = string.replace(new RegExp(escapeRegExp("{"+i+"}"),'g'),v)
  })
  return string
}

escapeRegExp = function(s) {
  return s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}
