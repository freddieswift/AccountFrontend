import React from 'react'
import classes from './CategoryCard.module.css'

const CategoryCard = (props) => {
    return (
        <div className={classes.categoryCard}>
            <div className={classes.nameAmountContainer}>
                <p>{props.name}</p>
                <p>Amount: {props.value ? `${props.value}` : '0'}</p>
            </div>
            <p>{props.percent}%</p>
        </div>
    )
}

export default CategoryCard