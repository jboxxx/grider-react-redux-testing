import React from 'react';
import { mount } from 'enzyme';  // fulldom rendering
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

// Jest runs before each it statement
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// Jest runs after each it statement
afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two button', () => {
  // find is JQuery-like
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

// organizing and is able to limit the scope of the beforeEach statement
describe('the text area', () => {
  beforeEach(() => {
    // fulldom rendered componented method .simulate
    // the event name is the HTML event, not the react name
    // React's event is onChange -> so this is a change event
    // we've just called setState with our change event, and so this makes our component re-render.
    // however re-render requests are pooled in React, and thus are async
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // expecting the value prop of textarea to equal new comment.
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a form that can be submitted to clear the text', () => {
    wrapped.find('form').simulate('submit', {});
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
