import React from 'react';
import ReactDOM from 'react-dom';
import App from './ButtonC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonC />, div);
  ReactDOM.unmountComponentAtNode(div);
});
