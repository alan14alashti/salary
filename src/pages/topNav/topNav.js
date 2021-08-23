import classes from './topNav.module.css'
import { useState } from 'react';
const TopNav = () => {
    const [ open, setOpen ] = useState(false); 
    return (
        <div className={classes.topNav_container}>
            <div className={classes.bar_menue_icon_container}>
                <i onClick={() => setOpen(!open)} class="fas fa-bars"></i>
            </div>
            {open && 
                <div className={classes.menue_container}>
                    <div className={`${classes.menue} col-8 col-sm-7 col-lg-5 col-md-6 col-xl-3` }>
                        <div className={classes.times_icon}>
                            <i onClick={() => setOpen(!open)} class="fas fa-times"></i>
                        </div>
                    </div>
                </div>
            }
            <div className={classes.img_container}>
                <img src='/unnamed.png'></img> 
            </div>
            <div className={classes.top_nav_left}>
                <div className={classes.dropdown}>
                    <span><i className="fas fa-user-alt"></i></span>
                    <div className={classes.dropdown_content}>
                        <a className="text-decoration-none" href="#"> خروج از حساب </a>
                        <a className="text-decoration-none" href="#"> ویرایش مشخصات </a>
                        <a className="text-decoration-none" href="#"> تغییر رمز عبور </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default TopNav;

{/* <div>
                    <span> پشتیبانی : </span>
                    <span> 021-56112329 </span>
                </div> */}