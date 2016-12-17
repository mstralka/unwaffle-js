/**
 * Unwaffle
 * The [Unwaffle](https://unwaffle.com) API. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Unwaffle);
  }
}(this, function(expect, Unwaffle) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Unwaffle.TransportObject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TransportObject', function() {
    it('should create an instance of TransportObject', function() {
      // uncomment below and update the code to test TransportObject
      //var instane = new Unwaffle.TransportObject();
      //expect(instance).to.be.a(Unwaffle.TransportObject);
    });

    it('should have the property participant (base name: "Participant")', function() {
      // uncomment below and update the code to test the property participant
      //var instane = new Unwaffle.TransportObject();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "Label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new Unwaffle.TransportObject();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "Action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new Unwaffle.TransportObject();
      //expect(instance).to.be();
    });

  });

}));
