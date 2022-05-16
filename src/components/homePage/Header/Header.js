import React from 'react'
import classes from './Header.module.css'
import Button from '../../utils/Button'

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.companyName}>J Alex Swift</h1>
            <Button>Log Out</Button>
        </header >
    )
}

export default Header