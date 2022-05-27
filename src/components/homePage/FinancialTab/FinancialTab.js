import React, { useState, useEffect } from 'react'
import classes from './FinancialTab.module.css'
import YearList from './YearList'
import YearInfo from './YearInfo'
import COSOHContainer from './COSOHContainer'

const FinancialTab = (props) => {
    const [selectedYearInfo, setSelectedYearInfo] = useState()

    const changeSelectedYearHandler = (yearId) => {
        //setSelectedYear(yearId)
        //get year by id when a year is selected
        fetch(`http://127.0.0.1:3000/year/${yearId}`, {
            method: 'GET',
            withCredentials: true,
            headers: {
                'Authorization': process.env.REACT_APP_TOKEN
            }
        })
            .then(response => {
                return response.json()
            })
            .then(yearInfo => {
                setSelectedYearInfo(yearInfo)
            })
    }

    const updateInfoHandler = (name, value) => {
        setSelectedYearInfo({
            ...selectedYearInfo,
            [name]: value
        })
    }

    const saveHandler = () => {
        const { totalCOS, totalOH, ...selectedYearInfoToUpdate } = selectedYearInfo
        fetch(`http://127.0.0.1:3000/year/${selectedYearInfo._id}`, {
            method: 'PATCH',
            withCredentials: true,
            headers: {
                'Authorization': process.env.REACT_APP_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedYearInfoToUpdate)
        })
            .then(response => {
                return response.json()
            })
            .then(yearInfo => {
                setSelectedYearInfo(yearInfo)
                props.getListOfYears()
            })
    }

    return (
        <div className={classes.financialTab}>
            <YearList
                listOfYears={props.listOfYears}
                changeSelectedYearHandler={changeSelectedYearHandler}
                selectedYear={selectedYearInfo}
                addYearHandler={props.addYearHandler}
            />
            {selectedYearInfo &&
                <COSOHContainer
                    name='COS'
                    total={selectedYearInfo.totalCOS}
                    categories={selectedYearInfo.categories}
                />
            }
            {selectedYearInfo &&
                <COSOHContainer
                    name='OVERHEAD'
                    total={selectedYearInfo.totalOH}
                    categories={selectedYearInfo.categories}
                />
            }
            {selectedYearInfo &&
                <YearInfo
                    turnover={selectedYearInfo.turnover}
                    predictedDozens={selectedYearInfo.predictedDozens}
                    name={selectedYearInfo.name}
                    updateInfoHandler={updateInfoHandler}
                    saveHandler={saveHandler}
                    totalCOS={selectedYearInfo.totalCOS}
                    totalOH={selectedYearInfo.totalOH}
                    active={selectedYearInfo.active}
                />
            }
        </div>
    )
}

export default FinancialTab