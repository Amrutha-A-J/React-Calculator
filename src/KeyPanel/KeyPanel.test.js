import React from 'react';
import ReactDOM from 'react-dom';
import App from './KeyPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
