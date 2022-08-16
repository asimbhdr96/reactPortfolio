import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App'
import { BrowserRouter as Router} from "react-router-dom";
import './style.css'
import './boostrap/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App/>
    </Router>

)
