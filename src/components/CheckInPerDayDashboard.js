import React, { Component } from 'react';
import DatePicker from "react-datepicker"

const checkIns = [
    {
        vehicleID: "33-1111",
        trips: [
            {
                employeeID: 11111,
                date: '11/04/2021',
                time: '08:30'
            },
            {
                employeeID: 11112,
                date: '11/04/2021',
                time: '08:35'
            },
            {
                employeeID: 11113,
                date: '11/04/2021',
                time: '18:30'
            }
        ], sum: 3
    },
    {
        vehicleID: "33-1112",
        trips: [
            {
                employeeID: 11121,
                date: '11/04/2021',
                time: '08:30'
            },
            {
                employeeID: 11122,
                date: '11/04/2021',
                time: '08:35'
            },
            {
                employeeID: 11123,
                date: '11/04/2021',
                time: '17:30'
            }
        ], sum: 4
    }
]

class CheckInPerDayDashboard extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            vehicleID: "ทั้งหมด"
        }
    }

    handleChange = async (date) => {
        console.log(date)
        this.setState({
            date: new Date(date)
        })
    }

    vehicleIDChange = async (e) => {
        const { name, value } = e.target
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{
                    border: "1px #f0f0f0 solid",
                    margin: "10px",
                    padding: "5px"
                }}>
                    <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <br />
                        วันที่: <DatePicker
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                        <br /><br />
                        ทะเบียนรถ: <select name="vehicleID" onChange={this.vehicleIDChange}>
                            <option value="ทั้งหมด">ทั้งหมด</option>
                            <option value="33-1111">33-1111</option>
                            <option value="33-1112">33-1112</option>
                        </select>
                        <br /><br />
                    </div>
                </div>
                {console.log(this.state.date.getDay())}
                <br /><br />
                {
                    (this.state.date.getDay() === 4 && this.state.date.getMonth() === 10 && this.state.date.getFullYear() === 2021) && <div>
                        {checkIns.map((checkIn, index) => {
                            if (this.state.vehicleID === "ทั้งหมด") {
                                return (<div className="card" key={index} style={{ margin: "15px" }}>
                                    <div className="card-header">
                                        {checkIn.vehicleID}
                                    </div>
                                    <div className="card-body">
                                        {checkIn.trips.map((trip, ind) => {
                                            return (<div key={ind}>
                                                <div className="row">
                                                    <div className="col">
                                                        {trip.employeeID}
                                                    </div>
                                                    <div className="col">
                                                        {trip.date} : {trip.time}
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>)
                                        })}
                                    </div>
                                </div>)
                            }
                            else if (this.state.vehicleID === checkIn.vehicleID) {
                                return (<div className="card" key={index} style={{ margin: "15px" }}>
                                    <div className="card-header">
                                        {checkIn.vehicleID}
                                    </div>
                                    <div className="card-body">
                                        {checkIn.trips.map((trip, ind) => {
                                            return (<div key={ind}>
                                                <div className="row">
                                                    <div className="col">
                                                        {trip.employeeID}
                                                    </div>
                                                    <div className="col">
                                                        {trip.date} : {trip.time}
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>)
                                        })}
                                    </div>
                                </div>)
                            } else return true
                        })}
                    </div>
                }

            </div>
        );
    }
}

export default CheckInPerDayDashboard;