import React, { Component } from 'react';

import "react-datepicker/dist/react-datepicker.css"
import CheckInPerDayDashboard from '../../../components/CheckInPerDayDashboard';
import CheckInPerMonthDashboard from '../../../components/CheckInPerMonthDashboard';

class CheckInDashboard extends Component {
    constructor() {
        super()
        this.state = {
            mode: 1,
        }
    }

    changeMode = async (mode) => {
        this.setState({ mode })
    }

    render() {
        return (
            <div>
                <div className="conatainer">
                    <br />
                    <div style={{
                        float: 'right',
                        marginRight: '15px'
                    }}>ออกจากระบบ</div>
                    <div style={{ clear: 'right' }}></div>
                </div>
                <hr />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <center>
                                <div className="row">
                                    <div
                                        className={this.state.mode === 1 ? 'col primary' : 'col'}
                                        style={{
                                            border: '1px solid #f0f0f0'
                                        }}
                                        onClick={() => this.changeMode(1)}
                                    >
                                        รายวัน
                                    </div>
                                    <div
                                        className={this.state.mode === 2 ? 'col primary' : 'col'}
                                        style={{
                                            border: '1px solid #f0f0f0'
                                        }}
                                        onClick={() => this.changeMode(2)}
                                    >
                                        สรุปประจำเดือน
                                    </div>
                                </div>
                            </center>
                        </div>
                        <br />
                        {
                            this.state.mode === 1 && <CheckInPerDayDashboard />
                        }
                        {
                            this.state.mode === 2 && <CheckInPerMonthDashboard />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckInDashboard;