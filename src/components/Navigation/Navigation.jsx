import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from "./Navigation.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from '../../redux/auth/selectors'
import { apiLogoutUser } from '../../redux/auth/operations';


const getNavLinkClassName = ({ isActive }) =>
    clsx(css.headerLink, { [css.active]: isActive })

const Navigation = () => {
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()
    const onLogOut = () => {
        dispatch(apiLogoutUser());
    };
    return (
        <div className={css.navigation}>
            <div className={css.homePage}><NavLink className={getNavLinkClassName} to='/' >Home</NavLink></div>
            <div>  <NavLink className={getNavLinkClassName} to='/contacts'>Contacts</NavLink></div>
            <span>Hello, {userData.name}</span>
            <button className={css.logOutBtn} type="button" onClick={onLogOut}>
                Logout
            </button>

        </div>
    )
}

export default Navigation