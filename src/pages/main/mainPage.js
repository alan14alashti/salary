import { useState } from 'react'
import Dashboard from './dashboard/dashboard'
import DrawerMenue from './drawerMenue'
import React from "react"
import BreadCrumb from '../breadCrumb/breadCrumb'
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
            <div className="row d-flex align-items-start g-2 g-sm-4 ">
                {/* <div className="col-xxl-1 col-lg-2 col-3 ">
                    <DrawerMenue clickHandler={clickHandler} data={data}/>
                </div> */}
                <div className="col-xxl-12 col-lg-11 col-10 ">
                    <Dashboard/>
                </div>
            </div>
        </div>
        </>
    );
}
export default MainPage;