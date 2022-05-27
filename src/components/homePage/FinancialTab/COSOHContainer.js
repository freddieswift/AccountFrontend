import React from 'react'
import classes from './COSOHContainer.module.css'
import CategoryCard from './CategoryCard'
<<<<<<< HEAD
import Button from '../../utils/Button'
=======
>>>>>>> 50142d1d66d91d1c526960ce8ef3fb7b62545436

const COSOHContainer = (props) => {

    // filter props.categories to find categories that relate to name
    // map filtered categories to category cards

    const filteredCategories = props.categories.filter(category => {
        return category.categoryType === props.name
    })

    const categoryCards = filteredCategories.map(category => {
        return <CategoryCard
            key={category._id}
            name={category.name}
            value={category.value}
            percent={((category.value / props.total) * 100).toFixed(2)}
        />
    })

    return (
        <div className={classes.container}>
<<<<<<< HEAD
            <h2>{props.name === 'COS' ? 'Cost of Sale' : 'Overhead Costs'}</h2>
            <p>Total: {`£${props.total}`}</p>
            {categoryCards}
            <Button>Add Category</Button>
=======
            <div className={classes.header}>
                <h2>{props.name === 'COS' ? 'Cost of Sale' : 'Overhead Costs'}</h2>
                <p>Total: {`£${props.total}`}</p>
                {categoryCards}
            </div>
>>>>>>> 50142d1d66d91d1c526960ce8ef3fb7b62545436
        </div>
    )
}

export default COSOHContainer