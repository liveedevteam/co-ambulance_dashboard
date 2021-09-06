import React, { Component } from 'react';

class PartientCaseCard extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div
                        className="card-header"
                        style={{
                            background: `${this.props.backgroundColor}`,
                            color: `${this.props.fontColour}`
                        }}
                    >
                        {this.props.caseType}
                    </div>
                    <div className="card-body">
                        <div>ชื่อ: {this.props.name}</div>
                        <div>เบอร์โทรศัพท์: {this.props.tel}</div>
                        <div>ที่อยู่: {this.props.address}</div>
                        <div>ส่งเคสวันที่: {this.props.createDate}</div>
                        <div>ส่งเคสเวลา: {this.props.createTime}</div>
                        {
                            this.props.dashboardType !== 0 && <div>
                                <hr />
                                <div>ข้อมูลรถ</div>
                                <div>นาย ซี อี</div>
                                <div>เบอร์โทร: 0949582655</div>
                                <div>ทะเบียน: กข-1133</div>
                            </div>
                        }
                        {
                            this.props.dashboardType === 2 && <div>
                                <br />
                                <button
                                    className="btn btn-danger"
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    ยกเลิก
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PartientCaseCard;