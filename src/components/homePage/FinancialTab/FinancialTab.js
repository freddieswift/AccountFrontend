import React, { useState, useEffect } from 'react'
import classes from './FinancialTab.module.css'
import YearList from './YearList'
import YearInfo from './YearInfo'
import COSOHContainer from './COSOHContainer'
import AddYearModal from './AddYearModal'

const FinancialTab = (props) => {
    const [selectedYearInfo, setSelectedYearInfo] = useState()
    const [addYearModal, setAddYearModal] = useState(false)
    const [listOfYears, setListOfYears] = useState([])

    useEffect(() => {
        getListOfYears()
    }, [])

    const changeSelectedYearHandler = async (yearId) => {
        //setSelectedYear(yearId)
        //get year by id when a year is selected
        try {
            const response = await fetch(`http://127.0.0.1:3000/year/${yearId}`, {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })

            if (!response.ok) {
                throw new Error("Something went wrong...")
            }

            const responseData = await response.json()

            setSelectedYearInfo(responseData)
        }
        catch (error) {
            alert(error)
        }

    }

    const updateInfoHandler = (name, value) => {
        setSelectedYearInfo({
            ...selectedYearInfo,
            [name]: value
        })
    }

    const saveHandler = async () => {
        const { totalCOS, totalOH, ...selectedYearInfoToUpdate } = selectedYearInfo

        try {
            const response = await fetch(`http://127.0.0.1:3000/year/${selectedYearInfo._id}`, {
                method: 'PATCH',
                withCredentials: true,
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedYearInfoToUpdate)
            })

            const responseData = await response.json()

            if (!response.ok) {
                if (responseData.error) {
                    changeSelectedYearHandler(selectedYearInfo._id)
                    throw new Error(responseData.error)
                }
                else {
                    throw new Error("Something went wrong.")
                }
            }

            setSelectedYearInfo(responseData)
            getListOfYears()
            alert("Save successful")
        }
        catch (error) {
            alert(error)
        }
    }

    const getListOfYears = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/year', {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })

            const responseData = await response.json()

            setListOfYears(responseData)
        }
        catch (error) {
            alert("Something went wrong. Please make sure you are connected to the internet...")
        }
    }

    const addYearHandler = async (yearName) => {
        try {
            const response = await fetch('http://127.0.0.1:3000/year', {
                method: 'POST',
                body: JSON.stringify({
                    "name": yearName
                }),
                withCredentials: true,
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error("Something went wrong")
            }

            getListOfYears()
        }
        catch (error) {
            alert(error)
        }
    }

    const openAddYearModal = () => {
        setAddYearModal(true)
    }

    const closeAddYearModal = () => {
        setAddYearModal(false)
    }

    return (
        <div className={classes.financialTab}>
            {addYearModal && <AddYearModal closeAddYearModal={closeAddYearModal} addYearHandler={addYearHandler} />}
            <YearList
                listOfYears={listOfYears}
                changeSelectedYearHandler={changeSelectedYearHandler}
                selectedYear={selectedYearInfo}
                openAddYearModal={openAddYearModal}
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