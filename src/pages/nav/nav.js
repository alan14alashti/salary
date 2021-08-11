import {Link} from "react-router-dom"
import * as React from "react";

const NavBar = () => {
    return (
        <div>
            <span> فراتکنو </span>
            <nav>
                <ul>
                    <li>
                        <Link className="text-decoration-none" to="/admin"> ورود به عنوان ادمین </Link>
                    </li>
                    <li>
                        <Link className="text-decoration-none" to="/user"> ورود به عنوان کاربر </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;