import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';

import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display this', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click', {});

  // moxios will wait until the pending request is resolved
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments! (li's)
    expect(wrapped.find('li').length).toEqual(2);
    // when pulling done off the it() function, Jest will only finish when the done callback is invoked
    done();
    wrapped.unmount();
  });
});
