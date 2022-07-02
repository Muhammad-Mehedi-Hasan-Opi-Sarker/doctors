import React from 'react';
import { Outlet,Link } from "react-router-dom";

const Dhashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <h1 className='text-4xl text-primary'>Dhasboard</h1>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to='/dhashboard'>My Appointment</Link></li>
                    <li><Link to='/dhashboard/myreview'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dhashboard;