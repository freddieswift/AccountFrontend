import React, { useState, useEffect } from 'react'
import classes from './YearInfo.module.css'

const YearInfo = (props) => {

    const [turnoverState, setTurnoverState] = useState(props.turnover)

    useEffect(() => {
        setTurnoverState(props.turnover)
    }, [props.turnover])

    const turnoverChangeHandler = (event) => {
        setTurnoverState(event.target.value)
    }

    return (
        <div className={classes.yearInfo}>
            <h2>Year Information</h2>
            <h3>Turnover</h3>
            <form>
                <input
                    type='number'
                    name='turnover'
                    value={turnoverState}
                    onChange={turnoverChangeHandler}
                />
            </form>
        </div>
    )
}

export default YearInfo