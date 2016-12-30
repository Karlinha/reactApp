import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';	
import Content from './Content.jsx';



ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));