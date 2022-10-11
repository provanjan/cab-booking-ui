import React from "react";
import AdminService from "../Services/AdminService";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: 0,
            tripCount: 0,
            distance: 0,
            revenue: 0
        }
    }




    componentDidMount() {
        AdminService.userCount().then(response => {
            this.setState({
                userCount: response.data
            })
        })

        AdminService.tripsCount().then(response => {
            this.setState({
                tripCount: response.data
            })
        })

        AdminService.distanceCount().then(response => {
            this.setState({
                distance: response.data
            })
        })

        AdminService.revenueCount().then(response => {
            this.setState({
                revenue: response.data
            })
        })
    }


    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card bg-success text-white h-100">
                            <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                                <div className="rotate">
                                    <i className="fa fa-user fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Users</h6>
                                <h1 className="display-4">{this.state.userCount}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-danger h-100">
                            <div className="card-body bg-danger">
                                <div className="rotate">
                                    <i className="fa fa-list fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Total Trips</h6>
                                <h1 className="display-4">{this.state.tripCount}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-info h-100">
                            <div className="card-body bg-info">
                                <div className="rotate">
                                    <i className="fa fa-rocket fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Total Distance </h6>
                                <h1 className="display-4">{this.state.distance}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-warning h-100">
                            <div className="card-body">
                                <div className="rotate">
                                    <i className="fa fa-money-bill-wave fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Total Revenue</h6>
                                <h1 className="display-4">${this.state.revenue}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Statistics;