'use strict'
var expect = require('chai').expect;
var Zealot = require('./zealot')
describe('Zealot constructor',function (){
  describe('Prototype methods',function (){
    it('should say hello',function (){
      var zealot = new Zealot();
      expect(zealot.sayHello()).to.equal('My Life for Auir!')
    })
  })
})
