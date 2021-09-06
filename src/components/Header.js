import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        borderBottom: '3px solid #000',
                        padding: '10px'
                    }}>
                    <div className="container">
                        <div style={{ float: 'right' }}>
                            <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout
                        </div>
                        <div style={{ clear: 'right' }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;