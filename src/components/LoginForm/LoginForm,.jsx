import React from 'react'
import css from "./LoginForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";



const UserLoginSchema = Yup.object().shape({

    email: Yup.string().email("Must be a valid email!").required("Email is required"),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Password is required"),

});

const INITIAL_FORM_DATA = {

    email: "",
    password: ""
}

const LoginForm = ({ onLogin }) => {
    const handleSubmit = (data, formActions) => {
        onLogin((data))
        formActions.resetForm()
    }

    return (

        <Formik
            validationSchema={UserLoginSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <Form className={css.formLogin}>
                <h2 className={css.formTitle}>Login</h2>
                
                <label className={css.labelLogin}>
                    <span className={css.formLoginText}>Email</span>
                    <Field className={css.formInputLogin} type="email" name="email" autoComplete="email" />

                </label>

                <label className={css.labelLogin}>
                    <span className={css.formLoginText}>Password</span>
                    <Field className={css.formInputLogin} type="password" name="password" autoComplete="current-password" />

                </label>

                <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Log in">Sign in</button>

            </Form>
        </Formik>



    )
}

export default LoginForm