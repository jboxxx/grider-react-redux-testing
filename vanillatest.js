// the .test.js is unnecessary as we are in the __tests__ folder
// we don't want two App.js files though

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// it shows a comment box
// it refers to the component which is in the file name
it('shows a comment box', () => {
  // creates a div in JSDOM, not the browser
  const div = document.createElement('div');

  // React thinks its rendering on a browser. LOL
  ReactDOM.render(<App />, div);

  // looks inside the div, checks to see if the commentBox is there
  expect(div.innerHTML).toContain('CommentBox');

  ReactDOM.unmountComponentAtNode(div);

  // if it doesn't fail up to this point, the App component renders
  // Jest simulates how a browser behaves and can be run from the command line
  // Jest tricks React into thinking its in a browser using the JSDOM library

});
