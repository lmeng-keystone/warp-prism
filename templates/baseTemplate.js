module.exports = (function (){
	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function BaseTemplate(name,testrunner){
		this.name = name;
		this.formattedName = name.capitalize()
		this.testrunner = testrunner || 'assert';
		if (this.testrunner === 'chai'){
			this.requireLine = "var expect = require('"+this.testrunner+"').expect;";
			this.verificationLine = "expect("+ this.name+ ".sayHello()).to.equal('My Life for Auir!')"
		}else {
			this.requireLine = "var assert = require('"+this.testrunner+"');"
			this.verificationLine = "assert.equal("+" 'My Life for Auir!'"+", "+this.name+".sayHello());"
		
		}
		
		
	}

	BaseTemplate.prototype._createModule = function (){
		this.module =  {
			dependencies: '',
			lines: [
				"module.exports = (function (){",
				"  function "+this.formattedName+"(){",
				"  }", 
				"  ",
				"  " + this.formattedName + ".prototype.sayHello = function (){",
				"  " + "  " + "return 'My Life for Auir!'",
				"  }",
				"  return " + this.formattedName,
				"})()"
			]
		}
		return this
	}

	BaseTemplate.prototype._createModuleSpec = function (){
		this.moduleSpec = {
			dependencies: '',
			lines: [
				"'use strict'", 
				this.requireLine,
				"var "+this.formattedName+" = require('./" + this.name + "')",
				"describe('"+this.formattedName+" constructor',function (){",
				"  describe('Prototype methods',function (){",
				"    it('should say hello',function (){",
				"      var "+ this.name +" = new "+this.formattedName+"();",
				"      "+ this.verificationLine,
				"    })",
				"  })",
				"})"
			]
		}
		return this
	}

	BaseTemplate.prototype.init = function () {
		this._createModule()
		this._createModuleSpec()
	}


	return BaseTemplate
})()