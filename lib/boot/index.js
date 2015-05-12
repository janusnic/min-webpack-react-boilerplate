'use strict';

require('./index.css');

import React from 'react';
import Point from '../point';
let point = document.querySelector('.js-point');
point.textContent = 'Good point: ' + new Point(1, 3);

import Checkbox from '../checkbox/index.js';
let target = document.querySelector('.js-checkbox');

React.render(
  <Checkbox labelOn="ON" labelOff="OFF "/>,
  target
);
