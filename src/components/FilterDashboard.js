import React, { Component } from 'react';

class FilterDashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        this.props.handleChange(name, parseInt(value))
    }

    render() {
        return (
            <div>
                <select
                    name="dashboardType"
                    className="form-select"
                    aria-label="Default select example"
                    onChange={this.handleChange}
                >
                    <option value={0} defaultValue>รอการ Matching</option>
                    <option value={1}>Matching แล้ว</option>
                    <option value={2}>รอรถตอบรับ Case เกิน 5 นาที</option>
                    <option value={3}>ประวัติการวิ่งรถ</option>
                    <option value={4}>Matching ล้มเหลว</option>
                </select>
            </div>
        );
    }
}

export default FilterDashboard;