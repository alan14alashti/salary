import { useState } from 'react'
import classes from './addUser.module.css'

const TabsContainer = ({tabClickHandler, clickedTab}) => {
    const tabs = [
        "استخدامی",
        "فردی",
        "تماس",
        "تحصیلی",
        "فیزیکی",
        "بیمه",
        "حسابداری",
        "مدارک",
        "احکام",
        "ورود به سیستم"
    ]
    return (
        <div className={classes.tabs_container}>
            {tabs.map((item,index) => (
                <div onClick={() => tabClickHandler(index)} className={clickedTab === index ? classes.selected_tab : classes.tab}>
                    <span>{item}</span>
                </div>
            )   
            )}
        </div>
    );
}
export default TabsContainer;