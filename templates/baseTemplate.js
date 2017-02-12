module.exports = (function (){
	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function BaseTemplate(name,testrunner){
		this.name = name;
		this.testrunner = testrunner || 'chai';
		this.module = {
			dependencies: '',
			lines: [
				"module.exports = (function (){",
				"  function "+name.capitalize()+"(){",
				"  }", 
				"  ",
				"  " + name.capitalize() + ".prototype.sayHello = function (){",
				"  " + "  " + "return 'My Life for Auir!'",
				"  }",
				"  return " + name.capitalize(),
				"})()"
			]
		}

		this.moduleSpec = {
			dependencies: '',
			lines: [
				"'use strict'", 
				"var expect = require('"+testrunner+"').expect;",
				"var "+name.capitalize()+" = require('./" + name + "')",
				"describe('"+name.capitalize()+" constructor',function (){",
				"  describe('Prototype methods',function (){",
				"    it('should say hello',function (){",
				"      var "+ name +" = new "+name.capitalize()+"();",
				"      expect("+ name+ ".sayHello()).to.equal('My Life for Auir!')",
				"    })",
				"  })",
				"})"
			]
		}
	}

	return BaseTemplate
})()