import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import assert from 'assert';
import CheckboxWithLabel from '../lib/checkbox';
let checkbox;

describe('Checkbox', function(){

  beforeEach(function(){
    checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />, document.body
    );
  });

  it('CheckboxWithLabel: should exist', function () {
    let el = checkbox.getDOMNode();
    assert.ok(el, 'I exist');
  });

  it('CheckboxWithLabel: should have default props', function () {
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    let node = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    TestUtils.Simulate.change(node);
    assert.equal(label.getDOMNode().textContent, 'On');
  });

  it('should set the label to \'Off\' by default', function() {
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    assert(label.getDOMNode().textContent === 'Off');
  });

  it('should update the label to \'On\' onChange()', function() {
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    checkbox.setState({isChecked: true});
    assert(label.getDOMNode().textContent === 'On');
  });
});
