import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as serviceWorker from './serviceWorker';

import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { RobotProvider } from './contexts/RobotContext';

library.add(
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight
)


ReactDOM.render(
  <RobotProvider>
    <App />
  </RobotProvider>
  , document.getElementById('root'));


serviceWorker.unregister();
