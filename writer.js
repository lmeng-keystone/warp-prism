var fs = require('fs');
var path = require('path')
var BaseTemplate = require('./templates/baseTemplate')
module.exports = (function (){
  function Writer(name,path,options){
    this.name = name;
    this.path = path 
    this.testrunner = options.testrunner || 'chai'
    this.template  = new BaseTemplate(this.name,this.testrunner)//name, test module
  }

  //private method
  Writer.prototype.save = function (type){
    var templateType = (type == 'module') ? this.template.module : this.template.moduleSpec
    var fileName = (type === 'module') ? this.name + '.js' : this.name + '.spec.js';
    var ws = fs.createWriteStream(this.path + '/' + fileName);
    ws.on('error', function(err) { 
      console.error("err: ",err)/* error handling */ 
    });
    var arr = templateType.lines
    arr.forEach(function(str) { 
      ws.write(str+ '\n'); 
    });
    ws.end();
  }

  Writer.prototype.writeModule = function (){
  	this.save('module')
    return this;
	}

  Writer.prototype.writeModuleSpec = function (){
    this.save('moduleSpec')
    return this;
  }
  return Writer
})()
