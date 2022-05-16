import React from 'react'
import classes from './TabContainer.module.css'

const TabContainer = (props) => {
    return (
        <div className={classes.tabContainer}>{props.children}</div>
    )
}

export default TabContainer