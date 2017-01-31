#!/usr/bin/env node
var args = process.argv.slice(2);
module.exports = (function (){
  var Writer = require("./writer")
  var _ = require('underscore')
  var name = args[0] || 'default'
  var dirpath = args[1] || 'default' 
  var writer = new Writer(name,'/'+dirpath)//args are (name,path)
    writer.writeModule().writeModuleSpec()

  function WarpPrism(){

  }
  return WarpPrism
})()
