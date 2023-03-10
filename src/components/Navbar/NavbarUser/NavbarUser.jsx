import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors";

import styles from "./navbar-user.module.css";

const NavbarUser = () => {
    const {email} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = ()=> {
        dispatch(logout());
    }

    return (
        <div>
            {email}, <button className={styles.btn} onClick={onLogout}>Logout</button>
        </div>
    )
}

export default NavbarUser;