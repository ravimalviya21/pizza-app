import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import "./home.css"
import NavBar from './NavBar';


ReactDOM.render(
    <React.StrictMode>
        <div className="body-section">
        {/* <App></App> */}
        <NavBar></NavBar>

        </div>
    </React.StrictMode>, document.getElementById('root')
);