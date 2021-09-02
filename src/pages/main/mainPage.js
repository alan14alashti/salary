import { useState } from 'react'
import Dashboard from './dashboard/dashboard'
import DrawerMenue from './drawerMenue'
import React from "react"
import SideNav from '../sideNav/sideNav'
const MainPage = () => {
    const [clickedItem, setClickedItem] = useState(0);
    const clickHandler = (index) => {
        setClickedItem(index)
    }
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Dashboard/>
                </div>
            </div>
        </div>
        </>
    );
}
export default MainPage;