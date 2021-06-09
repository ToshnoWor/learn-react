import React from 'react';
import ReactDOM from 'react-dom';
import StartApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
