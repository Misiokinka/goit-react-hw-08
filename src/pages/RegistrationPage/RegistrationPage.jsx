

import { useDispatch } from "react-redux";
import css from "../../pages/RegistrationPage/RegistrationPage.module.css"
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { apiRegisterUser } from "../../redux/auth/operations";



const RegistrationPage = () => {
    const dispatch = useDispatch()

    const onRegister = (formData) => {
        dispatch(apiRegisterUser(formData))
    }


    return (
        <div >
            <RegistrationForm onRegister={onRegister} />

        </div>


    )
}

export default RegistrationPage;