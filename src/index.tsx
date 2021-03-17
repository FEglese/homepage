import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter} from 'react-router-dom';

// Components
import App from './components/App';

// Style
import './style/app.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

