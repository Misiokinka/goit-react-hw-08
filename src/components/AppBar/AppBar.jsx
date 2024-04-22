import React from 'react'
import Navigation from '../Navigation/Navigation'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import AuthNav from '../AuthNav/AuthNav'
import css from './AppBar.module.css'





const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <>
            {isLoggedIn ? (
                <>
                    <Navigation />
                </>
            ) : (
                <>
                    <AuthNav />
                </>
            )}
        </>
    );
};


export default AppBar