import React from "react"
import Home from "./Home.jsx"
import Artists from "./Artists.jsx"
import Discography from "./Discography.jsx"
import Audition from "./Audition.jsx"

export default function M_container({currentComponent}) {
    return (
        <>
        <div style={{backgroundColor: "#dee2e6"}}>                        
            {currentComponent === 'Home' && <Home/>}
            {currentComponent === 'Artists' && <Artists/>}
            {currentComponent === 'Discography' && <Discography/>}
            {currentComponent === 'Audition' && <Audition/>}
        </div>
        </>
    )
}