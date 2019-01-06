import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//redux store
import store from './store/store'
import { Provider } from 'react-redux'



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();