import React from 'react'
import classes from './YearCard.module.css'

const YearCard = (props) => {
    const onClickHandler = () => {
        if (props.changeSelectedYearHandler) {
            props.changeSelectedYearHandler(props.id)
        }
        else if (props.openAddYearModal) {
            props.openAddYearModal()
        }

    }

    return (
        <div
            className={`${classes.yearCard} ${classes[props.className]}`}
            onClick={onClickHandler}
        >
            {props.children}
        </div>
    )
}

export default YearCard