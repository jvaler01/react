import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <FirstApp someprop='testing props' anotherprop='isRequired'/>, divRoot );
