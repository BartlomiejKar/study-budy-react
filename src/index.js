import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';
import { server } from "mocks/browser"


server.start()

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
