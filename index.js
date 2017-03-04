#!/usr/bin/env node
var args = process.argv.slice(2);
var path = require('path')
var fs = require('fs')
var _ = require('underscore')
module.exports = (function (){
  var Parser = require('./cli/parser')
  var Writer = require("./writer")
  
  var parser = new Parser()
  parser.parse()
  parser.validate()
  
  //TODO: use node-dash-dash for command line parshing, --chai, --sinon
  var name = args[0] || 'default'
  var p = args[1] || 'psionic-matrix' 
  if (isCliArgument(p)){ p = 'psionic-matrix'}

  var options = {}

  _.extend(options,parser.parseResults)

  var dirpath = path.join(process.cwd(),p)
  if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
  }

  var writer = new Writer(name,dirpath,options)//args are (name,path)
  writer.writeModule().writeModuleSpec()

  function WarpPrism(){

  }
  return WarpPrism

  function isCliArgument(str){
    var bool = (str.charAt(0) == '-')
    return bool
  }
})()
