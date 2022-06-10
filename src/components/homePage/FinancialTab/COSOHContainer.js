import React from 'react'
import classes from './COSOHContainer.module.css'
import CategoryCard from './CategoryCard'
import Button from '../../utils/Button'

const COSOHContainer = (props) => {

    // filter props.categories to find categories that relate to name
    // map filtered categories to category cards

    const openAddCategoryModal = () => {
        props.openAddCategoryModal(props.name)
    }

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
            <h2>{props.name === 'COS' ? 'Cost of Sale' : 'Overhead Costs'}</h2>
            <p>Total: {`£${props.total}`}</p>
            {categoryCards}
            <Button onClick={openAddCategoryModal}>Add Category</Button>
        </div>
    )
}

export default COSOHContainer