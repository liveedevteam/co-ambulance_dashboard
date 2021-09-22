import React, { Component } from 'react';
import {
    socketInit
} from '../../../libs'

class HomeDashboard extends Component {
    constructor() {
        super()
        this.state = {
            screnarioCase: 0,
            mode: null,
            status: null
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

                </div>
            </div>
        );
    }
}

export default HomeDashboard;