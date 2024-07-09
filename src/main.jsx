import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Photojam } from './Photojam.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Photojam />
		</BrowserRouter>
	</React.StrictMode>
);
