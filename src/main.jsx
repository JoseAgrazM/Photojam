import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Photojam } from './Photojam.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './photojam/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Photojam />
			</BrowserRouter>
		</Provider>
	// </React.StrictMode>
);
