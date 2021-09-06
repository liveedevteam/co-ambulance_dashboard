import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = async () => {

    }

    login = async () => {

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div style={{ marginTop: '33%' }}></div>
                            <div
                                style={{
                                    border: '1px solid #f0f0f0',
                                    padding: '15px'
                                }}>
                                <div style={{ marginTop: '13%' }}></div>
                                <h4 align="center">เข้าสู่ระบบ</h4>
                                <br />
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    aria-label="default input example"
                                    onChange={this.handleChange}
                                />
                                <br />
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    aria-label="default input example"
                                    onChange={this.handleChange}
                                />
                                <br />
                                <button
                                    className="btn btn-primary"
                                    onClick={this.login}
                                    style={{
                                        width: '100%'
                                    }}
                                >เข้าสู่ระบบ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;