#!/usr/bin/env node
var args = process.argv.slice(2);
var path = require('path')
var fs = require('fs')
module.exports = (function (){
  var Writer = require("./writer")
  var name = args[0] || 'default'

  
  
  var p = args[1] || 'psionic-matrix' 
  var dirpath = path.join(process.cwd(),p)
  if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
  }

  var writer = new Writer(name,dirpath)//args are (name,path)
  writer.writeModule().writeModuleSpec()

  function WarpPrism(){

  }
  return WarpPrism
})()
