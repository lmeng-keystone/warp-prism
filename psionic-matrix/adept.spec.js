'use strict'
var expect = require('chai').expect;
var Adept = require('./adept')
describe('Adept constructor',function (){
  describe('Prototype methods',function (){
    it('should say hello',function (){
      var adept = new Adept();
      expect(randomizer.sayHello()).to.equal('hello')
    })
  })
})
