import classes from './sideNav.module.css'
import { Link } from 'react-router-dom';
const SideNav = ({active}) => {
    const dashboardItems = [
        {title:"کارمندان", icon:"mx-2 fas fa-users", to:"/MainPage/karmandan"},
        {title:"حکم ها", icon:"mx-2 fas fa-file-contract", to:"/MainPage/hokms"},
        {title:"آیتم های حقوق", icon:"mx-2 fas fa-file-invoice-dollar", to:"/MainPage/salaryItems"},
        {title:"محاسبه", icon:"mx-2 fas fa-calculator", to:"/MainPage/Mohasebe"},
        {title:"مساعده", icon:"mx-2 fas fa-money-check", to:"/MainPage/mosaede"},
        {title:"وام", icon:"mx-2 fas fa-money-check", to:"/MainPage/loans"},
        {title:"اطلاعات پایه", icon:"mx-2 fas fa-info-circle", to:"/MainPage/baseInfo"},
        {title:"کارمند ان", icon:"mx-2 fas fa-users", to:"/MainPage/karmandan"}
    ]
    return (
        <div className={classes.side_nav_container}>
            {dashboardItems.map(item => (
                <div className={classes.side_nav_item}>
                    <Link to={item.to} type="button" className={`${classes.link} ${active === item.title ? classes.active : null} text-decoration-none`}>
                        <i className={item.icon}></i>
                        <span>{item.title}</span>
                    </Link>
                </div>
            ))
            }
        </div>
    );
}
export default SideNav;