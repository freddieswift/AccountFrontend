import React from 'react'
import classes from './CategoryCard.module.css'

const CategoryCard = (props) => {
    return (
        <div className={classes.categoryCard}>
            <p>{props.name}</p>
            <p>Amount: {props.value ? `${props.value}` : '0'}</p>
            <p>Percent: {props.percent}</p>
        </div>
    )
}

export default CategoryCard