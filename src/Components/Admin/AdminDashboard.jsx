import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminControl from "./AdminControl";
import Statistics from "./Statistics";

function AdminDashboard ()
{

    const navigate = useNavigate()

    useEffect(() =>
    {
        if (!localStorage.getItem('token'))
        {
            navigate('/loginAdmin')
        }
    })

    return (
        <div>
            <div className="col-md-12 bg-light text-right" align="right">
                <button className="btn btn-dark " onClick={() =>
                {
                    console.log("logout clicked")
                    localStorage.removeItem('token')
                    navigate('/loginAdmin')
                }}><i className="fa fa-lock "></i> LOGOUT</button>
            </div>

            <AdminControl />

            <Statistics />
        </div>
    );


}

export default AdminDashboard;