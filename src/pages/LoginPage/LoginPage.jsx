
import { useDispatch } from "react-redux";

import css from "../../pages/LoginPage/LoginPage.module.css"
import LoginForm from "../../components/LoginForm/LoginForm,";
import { apiLoginUser } from "../../redux/auth/operations";

const LoginPage = () => {
    const dispatch = useDispatch()

    const onLogin = (formData) => {
        dispatch(apiLoginUser(formData))
    }
    return (


        <div className={css.homePageWrapper}>
                <LoginForm onLogin={onLogin} />

        </div>
    )

}

export default LoginPage;