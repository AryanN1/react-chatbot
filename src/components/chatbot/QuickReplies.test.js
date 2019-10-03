import React from 'react';
import ReactDOM from 'react-dom';
import QuickReplies from './QuickReplies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuickReplies />, div);
  ReactDOM.unmountComponentAtNode(div);
});