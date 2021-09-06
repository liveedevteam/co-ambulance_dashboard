import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class LogOut extends Component {
    logOut = async () => {
        console.log("LogOut")
        localStorage.removeItem('actk')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div style={{ float: 'right' }}>
                        <div onClick={this.logOut}>
                            <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout
                        </div>
                    </div>
                    <div style={{ clear: 'right' }}></div>
                </div>
            </div>
        );
    }
}

export default withRouter(LogOut);