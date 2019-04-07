import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

import './style/main-styles/normalize.css';
import './style/main-styles/style.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
ReactDOM.render(<Router />, document.getElementById('root'));