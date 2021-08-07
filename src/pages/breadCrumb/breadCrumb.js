import classes from './breadCrumb.module.css'
import { Link } from 'react-router-dom';
const BreadCrumb = ({ data }) => {
    return (
        <nav className={classes.bread_crumb_container}>
            <ul className={classes.bread_crumb_ul}>
                {data.map((item,index) => (
                    <>
                        <li className="ms-2">
                            <Link 
                                to={item.link} 
                                type="button" 
                                className={`${item.active ? classes.bread_crumb_li_active : classes.bread_crumb_li} text-decoration-none`}
                            >
                                {item.text} 
                            </Link>
                        </li>
                        {data.length - 1 > index ? <i className="ms-2 fas fa-angle-double-left"></i> : null}
                    </>
                ))}
            </ul>
        </nav>
    );
}
export default BreadCrumb;