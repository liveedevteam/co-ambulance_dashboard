import React, { Component } from 'react';
import LogOut from './LogOut';

class Header extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        borderBottom: '3px solid #000',
                        padding: '10px'
                    }}>
                    <LogOut />
                </div>
            </div>
        );
    }
}

export default Header;