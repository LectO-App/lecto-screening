import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))            A-vitals
// reportWebVitals();
