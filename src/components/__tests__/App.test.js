import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; // defines wrapped in the outer scope so it can be used in it()

beforeEach(() => { // before every signle test, we are running the arrow function
  wrapped = shallow(<App />); // this a wrapped version of the component ie more functionality
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
