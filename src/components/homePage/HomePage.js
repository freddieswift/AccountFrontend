import React, { useState } from 'react'
import Header from './Header/Header'
import TabSelection from './TabSelection/TabSelection'
import FinancialTab from './FinancialTab/FinancialTab'
import classes from './HomePage.module.css'

const HomePage = () => {

    const [selectedTab, setSelectedTab] = useState('financial')

    const changeTabToSocks = () => {
        setSelectedTab('socks')
    }

    const changeTabToFinancial = () => {
        setSelectedTab('financial')
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
                />
            }
            {selectedTab === 'socks' && <div>socks</div>}
        </div>
    )
}



export default HomePage