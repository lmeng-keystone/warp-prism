'use strict'
var expect = require('chai').expect;
var Templar = require('./templar')
describe('Templar constructor',function (){
  describe('Prototype methods',function (){
    it('should say hello',function (){
      var templar = new Templar();
      expect(randomizer.sayHello()).to.equal('hello')
    })
  })
})
