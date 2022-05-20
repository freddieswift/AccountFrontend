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

    const getListOfYears = () => {
        console.log("hello")
        fetch('http://127.0.0.1:3000/year', {
            method: 'GET',
            withCredentials: true,
            headers: {
                'Authorization': process.env.REACT_APP_TOKEN
            }
        })
            .then(response => {
                return response.json()
            })
            .then(years => {
                setListOfYears(years)
            })
    }

    const addYearHandler = () => {
        fetch('http://127.0.0.1:3000/year', {
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
            .then(response => {
                return response.json()
            })
            .then(years => {
                getListOfYears()
            })
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