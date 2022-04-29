import { React, useState } from 'react'
import classes from './LoginForm.module.css'

const LoginForm = () => {

    const [isLogin, setIsLogin] = useState(true)

    const isLoginChangeHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    const onSubmitHandler = () => {

    }

    return (
        <div className={classes.loginFormContainer}>
            <h1 className="loginFormTitle">{isLogin === true ? 'Login' : 'Sign Up'}</h1>
            <form className={classes.loginForm}>
                {!isLogin &&
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Company Name</label>
                        <input name="name" id="name" type="text" required />
                    </div>
                }
                <div className={classes.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" type="text" required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" required></input>
                </div>
                <button className={classes.button}>{isLogin === true ? 'Login' : 'Sign Up'}</button>
            </form >
            <p onClick={isLoginChangeHandler}>{isLogin === true ? 'Click here to create an account' : 'Already have an account? Click here to login'}</p>
        </div>
    )
}

export default LoginForm