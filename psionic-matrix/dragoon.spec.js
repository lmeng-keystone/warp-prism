'use strict'
var expect = require('chai').expect;
var Dragoon = require('./dragoon')
describe('Dragoon constructor',function (){
  describe('Prototype methods',function (){
    it('should say hello',function (){
      var dragoon = new Dragoon();
      expect(randomizer.sayHello()).to.equal('hello')
    })
  })
})
