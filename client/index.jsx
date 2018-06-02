import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:400,700', 'sans-serif']
  }
});

render(<App />, document.getElementById('app'));