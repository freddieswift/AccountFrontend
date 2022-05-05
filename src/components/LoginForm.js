import { React, useState, useRef } from 'react'
import classes from './LoginForm.module.css'

const LoginForm = () => {

    const nameInputRef = useRef()
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLogin, setIsLogin] = useState(true)

    const isLoginChangeHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        //const enteredName = nameInputRef.current.value
        const enteredUsername = usernameInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        if (isLogin) {
            fetch('http://127.0.0.1:3000/account/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: enteredUsername,
                    password: enteredPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                })
        }
        else {

            const enteredName = nameInputRef.current.value

            fetch('http://127.0.0.1:3000/account', {
                method: 'POST',
                body: JSON.stringify({
                    username: enteredUsername,
                    password: enteredPassword,
                    name: enteredName
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                })
        }




    }

    return (
        <div className={classes.loginFormContainer}>
            <h1 className="loginFormTitle">{isLogin === true ? 'Login' : 'Sign Up'}</h1>
            <form className={classes.loginForm} onSubmit={onSubmitHandler}>
                {!isLogin &&
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Company Name</label>
                        <input name="name" id="name" type="text" required ref={nameInputRef} />
                    </div>
                }
                <div className={classes.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" type="text" required ref={usernameInputRef} />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" required ref={passwordInputRef}></input>
                </div>
                <button className={classes.button}>{isLogin === true ? 'Login' : 'Sign Up'}</button>
            </form >
            <p onClick={isLoginChangeHandler}>{isLogin === true ? 'Click here to create an account' : 'Already have an account? Click here to login'}</p>
        </div>
    )
}

export default LoginForm