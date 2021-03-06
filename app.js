import './src/scss/all.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/components/App';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,        
        document.querySelector('#app')
    );
})