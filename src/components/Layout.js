import React from 'react'
import NavBar from './Navbar'

export default function Layout(props) {
    const children = props.children
    return (
        <>
            <NavBar />
            <div className="container-fluid pt-3">
                {children}
            </div>
        </>
    )
}
