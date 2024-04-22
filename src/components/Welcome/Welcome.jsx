import React from 'react'
import css from "./Welcome.module.css"
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors';

const Welcome = () => {
    const userData = useSelector(selectUserData)
    return <div className={css.welcomeText}>Welcome {userData.name} ! </div>;

}



export default Welcome

