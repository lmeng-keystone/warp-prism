'use strict'
var assert = require('assert');
var stuff = require('./stuff')
describe('stuff object literal',function (){
  describe('Property functions',function (){
    it('should say hello',function (){
      assert.equal( 'My Life for Auir!', stuff.sayHello());
    })
  })
})
