module.exports = (function (){
	var ClassTemplate = require('./classTemplate')
	var FunctionTemplate = require('./functionTemplate')
	var ObjectTemplate = require('./objectTemplate')

	var create =function (name,testrunner,options){
		if (options['class']){
			return new ClassTemplate(name,testrunner)
		}else if (options['function']){
			return new FunctionTemplate(name,testrunner)
		}else if (options['object']){
			return new ObjectTemplate(name,testrunner)
		}
	}
	return {
		create:create
	}
})()