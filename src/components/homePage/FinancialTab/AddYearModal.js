import React, { useRef } from 'react'
import Button from '../../utils/Button'
import classes from './AddYearModal.module.css'

const AddYearModal = (props) => {

    const yearNameRef = useRef()

    const addYear = () => {
        props.addYearHandler(yearNameRef.current.value)
        props.closeAddYearModal()
    }

    return (
        <div className={classes.addYearContainer}>
            <h1>Add Year</h1>
            <div>
                <label className={classes.label}>Name</label>
                <input
                    className={classes.input}
                    type='text'
                    ref={yearNameRef}
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={props.closeAddYearModal}>Close</Button>
                <Button onClick={addYear}>Add</Button>
            </div>
        </div>
    )
}

export default AddYearModal