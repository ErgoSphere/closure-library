/**
 * Copyright 2009 The Closure Library Authors. All Rights Reserved.
 * Author: dgajda@google.com (Damian Gajda)
 */

goog.setTestOnly();
goog.require('goog.testing.PseudoRandom');
goog.require('goog.testing.jsunit');
goog.require('goog.text.LoremIpsum');

var pseudoRandom;

function setUp() {
  pseudoRandom = new goog.testing.PseudoRandom(100);
  pseudoRandom.install();
}

function tearDown() {
  pseudoRandom.uninstall();
}

function testLoremIpsum() {
  var generator = new goog.text.LoremIpsum();
  assertEquals(
      'Lorem ipsum dolor sit amet, consecteteur. Elementum adipiscing ' +
          'nisl. Nisi egestas a, taciti enim, scelerisque. Vestibulum ' +
          'facilisis, quis vel faucibus a, pellentesque enim, nonummy vivamus ' +
          'sodales. Montes. Donec eu, risus luctus ligula ante tempor euismod. ' +
          'Porta nostra. Tincidunt in tincidunt eros, sit ante volutpat ' +
          'molestie semper parturient. Vestibulum. Nisi elit elit habitant ' +
          'torquent. A, pellentesque quis, aliquam a, varius enim, amet est ' +
          'hendrerit.',
      generator.generateParagraph(true));

  assertEquals(
      'Non elit adipiscing libero quis rhoncus a, condimentum per, eget ' +
          'faucibus. Duis ac consectetuer sodales. Lectus euismod sed, in a ' +
          'nostra felis vitae molestie imperdiet. Interdum mi, aptent nonummy ' +
          'dui, ve. Quisque auctor ut torquent congue, torquent erat primis ' +
          'ornare. Nunc at. Risus leo integer mattis enim quis nisi laoreet ' +
          'quisque. Eleifend gravida lacinia varius quam ullamcorper iaculis. ' +
          'Vivamus. Suscipit suscipit, libero parturient justo feugiat sapien, ' +
          'ad pharetra. Rutrum, viverra potenti tempor nisi in amet dictumst ' +
          'vitae. Fermentum lacus venenatis parturient vel risus. Congue ac, ' +
          'pharetra diam cum massa curae, vel leo elementum tempus platea, sit ' +
          'aliquam ve, ac.',
      generator.generateParagraph(false));
}
