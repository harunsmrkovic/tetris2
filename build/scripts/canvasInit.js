define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var canvas = document.getElementById('game');

  if (!canvas.getContext) {
    alert('Hello! This game is using cutting edge tech from 2005. Please update your browser in order to use it.');
  }

  var ctx = canvas.getContext('2d');

  exports.default = ctx;
});