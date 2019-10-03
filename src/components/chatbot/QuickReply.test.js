import React from 'react';
import ReactDOM from 'react-dom';
import QuickReply from './QuickReply';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuickReply 
    reply={{ 
      click: () => console.log('click'),
      reply: {
        kind: "structValue"
      },
      fields:{
        payload:{
          kind:"stringValue",
          stringValue: "Train"
        },
        text: {
          kind: "stringValue",
          stringValue: "Yes"
        }
      }
    }}
      />, div);
  ReactDOM.unmountComponentAtNode(div);
});