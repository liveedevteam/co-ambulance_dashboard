import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    login = async () => {
        console.log("START: Request login")
        const {
            username,
            password
        } = this.state
        const url = `${process.env.REACT_APP_API_URL}/api/auths/login`
        const body = {
            username,
            password
        }
        axios.post(url, body)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('actk', res.data.data.accessToken)
                    this.props.history.push('/dashboard')
                    
                }
            }).catch((error) => {
                console.log(error.response)
                try {
                    alert(`Error: ${error.response.data.msg}`)
                } catch (err) {
                    alert(err)
                }
                localStorage.removeItem('actk')
            })
        console.log("END: Login")
    }

    componentDidMount = async() => {
        if (localStorage.getItem('actk')) {
            this.props.history.push('/dashboard')
        }
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
                                <h4 align="center">?????????????????????????????????</h4>
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
                                >?????????????????????????????????</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;