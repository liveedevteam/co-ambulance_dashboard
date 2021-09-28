import React, { Component } from 'react';
import {
    socketInit
} from '../../../libs'
// import axios from 'axios';

class HomeDashboard extends Component {
    constructor() {
        super()
        this.state = {
            screnarioCase: 0,
            mode: null,
            status: null,
            pinpad: [
                0,
                3,
                6,
                9
            ],
            inputPin: ''
        }
    }

    onClickPinPad = async (num) => {
        console.log(num)
        let isNum = /^\d+$/.test(num)
        if (isNum) {
            let inputPin = this.state.inputPin
            inputPin = inputPin + num
            this.setState({
                inputPin
            })
        } else {
            if (num === 'del') {
                let inputPin = this.state.inputPin
                inputPin = inputPin.slice(0, -1)
                console.log(inputPin)
                this.setState({
                    inputPin
                })
            }
            if (num === 'enter') {
                let inputPin = this.state.inputPin
                inputPin = inputPin.slice(0, -1)
                console.log(inputPin)
                this.setState({
                    inputPin
                })
            }
        }
    }

    componentDidMount = async () => {
        const socket = socketInit()
        socket.on('connect', async () => {
        })
        socket.emit('susco-connect', 'testCommunication')
        socket.on('replyMode', async (response) => {
            console.log(response)
            this.setState({
                mode: response.mode,
                status: response.status,
                data: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br />
                    <h1 align="center">Simulation</h1>
                    <hr />
                    <h3>Mode: {this.state.mode}</h3>
                    <div>Status: {this.state.status}</div>
                    {
                        this.state.status === 200 && <div style={{ color: 'green' }}>
                            Success
                        </div>
                    }
                    {
                        this.state.status !== 200 && <div style={{ color: 'red' }}>
                            Failed
                        </div>
                    }
                    <div>Data:
                        {JSON.stringify(this.state.data)}
                    </div>
                    <hr />
                    {
                        this.state.mode === 'pay' && <div>
                            Card No: <input type="number" value={this.state.inputPin} disabled />
                            <br /><br />
                            <div className="pinpad">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <table className="table table-bordered">
                                            <tbody>
                                                {
                                                    this.state.pinpad.map((pin, ind) => {
                                                        if (pin !== 9) {
                                                            return (<tr key={ind}>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad(parseInt(pin + 1))}
                                                                >{pin + 1}</td>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad(parseInt(pin + 2))}
                                                                >{pin + 2}</td>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad(parseInt(pin + 3))}
                                                                >{pin + 3}</td>
                                                            </tr>)
                                                        } else {
                                                            return (<tr key={ind}>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad('del')}
                                                                >del</td>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad(parseInt(0))}
                                                                >0</td>
                                                                <td
                                                                    align="center"
                                                                    style={{ width: '60px' }}
                                                                    onClick={() => this.onClickPinPad('enter')}
                                                                >enter</td>
                                                            </tr>)
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
}

export default HomeDashboard;