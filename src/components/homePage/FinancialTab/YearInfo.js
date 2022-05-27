import React, { useState, useEffect } from 'react'
import classes from './YearInfo.module.css'
import Button from '../../utils/Button'

const YearInfo = (props) => {

    const [turnoverState, setTurnoverState] = useState(props.turnover)
    const [predictedDozensState, setPredictedDozensState] = useState(props.predictedDozens)
    const [nameState, setNameState] = useState(props.name)
    const [activeState, setActiveState] = useState(props.active)

    useEffect(() => {
        setTurnoverState(props.turnover)
        setPredictedDozensState(props.predictedDozens)
        setNameState(props.name)
    }, [props.turnover, props.predictedDozens, props.name, props.active])

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

    const activeChangeHandler = (event) => {
        console.log(event.target.checked)
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
                    Active
                </label>
                <input
                    type='checkbox'
                    onChange={activeChangeHandler}
                    checked={activeState}
                />
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
                <label
                    className={classes.yearInfoLabel}
                >
                    Gross Profit
                </label>
                <input
                    className={classes.yearInfoInput}
                    type='number'
                    name='grossProfit'
                    value={turnoverState - props.totalCOS}
                    readOnly
                />
                <label
                    className={classes.yearInfoLabel}
                >
                    Gross Profit
                </label>
                <input
                    className={classes.yearInfoInput}
                    type='number'
                    name='grossProfit'
                    value={turnoverState - props.totalOH - props.totalCOS}
                    readOnly
                />
            </form>
        </div>
    )
}

export default YearInfo