import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form } from './form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Views } from './view';
// import { Appi } from './dpform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form/>
    {/* <Views/> */}
    {/* <Appi/> */}
  </React.StrictMode>
);