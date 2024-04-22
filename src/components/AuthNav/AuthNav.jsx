import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
    clsx(css.headerLink, { [css.active]: isActive })

const AuthNav = () => {
    return (
        <div className={css.navigation}>
            <>  <NavLink className={getNavLinkClassName} to='/register'>Register</NavLink></>
            <> <NavLink className={getNavLinkClassName} to='/login'>Log In</NavLink></>
        </div>
    )
}

export default AuthNav