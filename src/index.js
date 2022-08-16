import React from 'react';
import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client'
import { Container } from "./new";

import './index.css';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>,
  document.getElementById('root')
);

// const container = document.getElementById('container');
// const root = createRoot(container);
// root.render(<App />);

