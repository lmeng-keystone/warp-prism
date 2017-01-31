module.exports = (function (){
	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function BaseTemplate(name){
		this.module = {
			dependencies: '',
			lines: [
				"module.exports = (function (){",
				"  function "+name.capitalize()+"(){",
				"  }", 
				"  ",
				"  " + name.capitalize() + ".prototype.sayHello() = function (){",
				"  " + "  " + "return 'hello'",
				"  }",
				"  return " + name.capitalize(),
				"})()"
			]
		}

		this.moduleSpec = {
			dependencies: '',
			lines: [
				"'use strict'", 
				"var expect = require('chai').expect;",
				"var "+name.capitalize()+" = require('./" + name + "')",
				"describe('"+name.capitalize()+" constructor',function (){",
				"  describe('Prototype methods',function (){",
				"    it('should say hello',function (){",
				"      var "+ name +" = new "+name.capitalize()+"();",
				"      expect(randomizer.sayHello()).to.equal('hello')",
				"    })",
				"  })",
				"})"
			]
		}
	}

	return BaseTemplate
})()