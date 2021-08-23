import { useState } from 'react'
import Dashboard from './dashboard/dashboard'
import DrawerMenue from './drawerMenue'
import React from "react"
import BreadCrumb from '../breadCrumb/breadCrumb'
import SideNav from '../sideNav/sideNav'
const MainPage = () => {
    const [clickedItem, setClickedItem] = useState(0);
    const clickHandler = (index) => {
        setClickedItem(index)
    }
    const breadCrumb = [
        {
            text: " ادمین " ,
            link: "/admin",
            active: 0
        },
        {
            text: " داشبورد " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
    return (
        <>
        <div className="container-fluid">
            <BreadCrumb data={breadCrumb}/>
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