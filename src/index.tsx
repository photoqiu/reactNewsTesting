import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './router';
import '@csstools/normalize.css';

ReactDOM.render(
    <BrowserRouter>
        <RouterConfig />
    </BrowserRouter>,
    document.querySelector('#app'),
);
