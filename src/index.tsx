import React , {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './store';
import Apphooks from './components/Apphooks';

ReactDOM.render(
	<Provider store={store}>
		<h1>Henry</h1>
        <Apphooks />
	</Provider>,
	document.querySelector('#root')
);