import React from 'react'
import Navbar from '../Navbar/Navbar'

const PageLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default PageLayout