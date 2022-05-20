import React, { useState, useEffect } from 'react'
import classes from './YearInfo.module.css'
import Button from '../../utils/Button'

const YearInfo = (props) => {

    const [turnoverState, setTurnoverState] = useState(props.turnover)
    const [predictedDozensState, setPredictedDozensState] = useState(props.predictedDozens)
    const [nameState, setNameState] = useState(props.name)

    useEffect(() => {
        setTurnoverState(props.turnover)
        setPredictedDozensState(props.predictedDozens)
        setNameState(props.name)
    }, [props.turnover, props.predictedDozens, props.name])

    const turnoverChangeHandler = (event) => {
        setTurnoverState(event.target.value)
        props.updateInfoHandler(event.target.name, event.target.value)
    }

    const predictedDozensChangeHandler = (event) => {
        setPredictedDozensState(event.target.value)
        props.updateInfoHandler(event.target.name, event.target.value)
    }

    const nameChangeHandler = (event) => {
        setNameState(event.target.value)
        props.updateInfoHandler(event.target.name, event.target.value)
    }

    const saveHandler = () => {
        props.saveHandler()
    }

    return (
        <div className={classes.yearInfo}>
            <Button onClick={saveHandler}>Save</Button>
            <h2>Year Information</h2>
            <form>
                <label
                    className={classes.yearInfoLabel}
                >
                    Name
                </label>
                <input
                    className={classes.yearInfoInput}
                    type='text'
                    name='name'
                    value={nameState}
                    onChange={nameChangeHandler}
                />
                <label
                    className={classes.yearInfoLabel}
                >
                    Turnover
                </label>
                <input
                    className={classes.yearInfoInput}
                    type='number'
                    name='turnover'
                    value={turnoverState}
                    onChange={turnoverChangeHandler}
                />
                <label
                    className={classes.yearInfoLabel}
                >
                    Predicted Dozens
                </label>
                <input
                    className={classes.yearInfoInput}
                    type='number'
                    name='predictedDozens'
                    value={predictedDozensState}
                    onChange={predictedDozensChangeHandler}
                />
            </form>
        </div>
    )
}

export default YearInfo