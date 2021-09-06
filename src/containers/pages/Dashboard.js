import React, { Component } from 'react';
import FilterDashboard from '../../components/FilterDashboard';
import Header from '../../components/Header';
import PartientCaseCard from '../../components/PartientCaseCard';
import {
    socketInit
} from '../../libs'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            dashboardType: 0
        }
    }

    getRealtimeData = async () => {
        const socket = socketInit()
        socket.on('connect', async () => {
        })
        socket.emit('get-data-to-dashboard', 'test')
        socket.on('get-data', async (response) => {
            console.log(response)
        })

    }

    handleChange = async (name, value) => {
        // console.log(name)
        // console.log(value)
        this.setState({
            [name]: value
        })
    }

    componentDidMount = async () => {
        await this.getRealtimeData()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <h4 align="center">Dashboard</h4>
                            <br />
                            <FilterDashboard handleChange={this.handleChange} />
                            <br />
                            {
                                this.state.dashboardType === 0 && <div>
                                    <div className="row">
                                        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <PartientCaseCard
                                                caseType="แดง"
                                                fontColour="white"
                                                backgroundColor="red"
                                                name="นาย เอ บี"
                                                tel="0949582611"
                                                address="พัฒนาการ เขต ประเวศ 10270"
                                                createDate="06/09/2021"
                                                createTime="13:52"
                                                dashboardType={this.state.dashboardType}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.dashboardType === 1 && <div>
                                    <div className="row">
                                        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <PartientCaseCard
                                                caseType="ส้ม"
                                                fontColour="white"
                                                backgroundColor="orange"
                                                name="นาย เอ็ม บี"
                                                tel="0949582611"
                                                address="พัฒนาการ เขต ประเวศ 10270"
                                                createDate="06/09/2021"
                                                createTime="13:53"
                                                dashboardType={this.state.dashboardType}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.dashboardType === 2 && <div>
                                    <div className="row">
                                        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <PartientCaseCard
                                                caseType="แดง"
                                                fontColour="white"
                                                backgroundColor="red"
                                                name="นาย บับเบิ้ล บี"
                                                tel="0949582610"
                                                address="พัฒนาการ เขต ประเวศ 10270"
                                                createDate="06/09/2021"
                                                createTime="13:54"
                                                dashboardType={this.state.dashboardType}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;