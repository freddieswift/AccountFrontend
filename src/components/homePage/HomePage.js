import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import TabSelection from './TabSelection/TabSelection'
import FinancialTab from './FinancialTab/FinancialTab'
import classes from './HomePage.module.css'

const HomePage = () => {

    const [selectedTab, setSelectedTab] = useState('financial')
    const [listOfYears, setListOfYears] = useState([])
    const [toggleAddYearPopUp, setAddYearPopUp] = useState(false)

    const changeTabToSocks = () => {
        setSelectedTab('socks')
    }

    const changeTabToFinancial = () => {
        setSelectedTab('financial')
    }

    useEffect(() => {
        getListOfYears()
    }, [])

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

    const addYearHandler = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/year', {
                method: 'POST',
                body: JSON.stringify({
                    "name": "Added Year"
                }),
                withCredentials: true,
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)

            if (!response.ok) {
                throw new Error("Something went wrong")
            }

            getListOfYears()
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <div className={classes.homePage}>
            <Header />
            <TabSelection
                changeTabToSocks={changeTabToSocks}
                changeTabToFinancial={changeTabToFinancial}
                selectedTab={selectedTab}
            />
            {
                selectedTab === 'financial' &&
                <FinancialTab
                    listOfYears={listOfYears}
                    addYearHandler={addYearHandler}
                    getListOfYears={getListOfYears}
                />
            }
            {selectedTab === 'socks' && <div>socks</div>}
        </div>
    )
}



export default HomePage