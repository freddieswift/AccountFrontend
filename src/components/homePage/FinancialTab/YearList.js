import React from 'react'
import classes from './YearList.module.css'
import YearCard from './YearCard'

const YearList = (props) => {

    const listOfYearsButtons = props.listOfYears.map(year => {

        if (props.selectedYear) {
            return <YearCard
                className={
                    props.selectedYear._id === year._id ? 'selectedYear' : ''
                }
                key={year._id}
                id={year._id}
                changeSelectedYearHandler={props.changeSelectedYearHandler}
            >
                {year.year}
            </YearCard>
        }

        return (
            <YearCard
                key={year._id}
                id={year._id}
                changeSelectedYearHandler={props.changeSelectedYearHandler}
            >
                {year.year}
            </YearCard>
        )
    })

    listOfYearsButtons.push(
        <YearCard
            key='AddYear'
            addYearHandler={props.addYearHandler}
        >
            Add Year
        </YearCard>)

    return (
        <div className={classes.yearList}>
            {listOfYearsButtons}
        </div >
    )
}

export default YearList