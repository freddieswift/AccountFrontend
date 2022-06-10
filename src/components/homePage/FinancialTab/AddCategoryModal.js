import React, { useRef } from 'react'
import Button from '../../utils/Button'
import classes from './AddCategoryModal.module.css'

const AddCategoryModal = (props) => {

    const categoryNameRef = useRef()
    const categoryValueRef = useRef()

    const addCategory = () => {
        props.addCategoryHandler(categoryNameRef.current.value, categoryValueRef.current.value, props.name)
        props.closeAddCategoryModal()
    }

    return (
        <div className={classes.addCategoryContainer}>
            <h1>Add {props.name === 'COS' ? 'Cost of sale' : 'Overhead'}</h1>
            <div>
                <label className={classes.label}>Name</label>
                <input
                    className={classes.input}
                    type='text'
                    ref={categoryNameRef}
                />

                <label className={classes.label}>Value</label>
                <input
                    className={classes.input}
                    type='number'
                    ref={categoryValueRef}
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={props.closeAddCategoryModal}>Close</Button>
                <Button onClick={addCategory}>Add</Button>
            </div>
        </div>
    )
}

export default AddCategoryModal