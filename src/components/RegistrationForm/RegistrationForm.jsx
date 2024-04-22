
import css from "./RegistrationForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";



const UserRegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Username is required"),
    email: Yup.string().email("Must be a valid email!").required("Email is required"),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Password is required"),

});

const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    password: ""
}

const RegistrationForm = ({ onRegister }) => {
    const handleSubmit = (data, formActions) => {
        onRegister((data))
        formActions.resetForm()
    }

    return (

        <Formik
            validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <Form className={css.formRegistration}>
                <h2 className={css.formTitle}>Register</h2>
                <label className={css.labelRegistration}>
                    <span className={css.formRegistrationText}>Name</span>
                    <Field className={css.formInputRegistration} type="name" name="name" autoComplete="name" />

                </label>
                <label className={css.labelRegistration}>
                    <span className={css.formRegistrationText}>Email</span>
                    <Field className={css.formInputRegistration} type="email" name="email" autoComplete="email" />

                </label>

                <label className={css.labelRegistration}>
                    <span className={css.formRegistrationText}>Password</span>
                    <Field className={css.formInputRegistration} type="password" name="password" autoComplete="current-password" />

                </label>

                <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Add user">Sign up</button>

            </Form>
        </Formik>



    )
}

export default RegistrationForm