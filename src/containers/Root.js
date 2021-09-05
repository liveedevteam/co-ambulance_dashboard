import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from '../App';

class Root extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </div>
        );
    }
}

export default Root;