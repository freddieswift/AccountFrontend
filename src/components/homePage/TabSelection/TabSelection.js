import React from 'react'
import classes from './TabSelection.module.css'
import Button from '../../utils/Button'

const TabSelection = (props) => {
    return (
        <div className={classes.tabSelection}>
            <Button
                className={props.selectedTab === 'financial' ? 'buttonActive' : ''}
                onClick={props.changeTabToFinancial}
            >
                Financial Information
            </Button>
            <Button
                className={props.selectedTab === 'socks' ? 'buttonActive' : ''}
                onClick={props.changeTabToSocks}
            >
                Socks
            </Button>
        </div>
    )
}

export default TabSelection