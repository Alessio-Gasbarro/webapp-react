import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const DefaultLayouts = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayouts