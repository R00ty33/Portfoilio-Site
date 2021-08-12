import React, { useState, useEffect } from 'react';
import './home.css'

function Home() {

    /*
    const [windowHeight, setwindowedHeight] = useState(window.outerHeight - (window.outerHeight - window.innerHeight))

    const handleHeight = () => {
        setwindowedHeight(window.outerHeight - (window.outerHeight - window.innerHeight));
        console.log('windowHeight = ' + windowHeight);
        console.log('window.innerHeight = ' +window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleHeight);

        return () => {
            window.removeEventListener('resize', handleHeight);
        }
    }, [windowHeight])
    */

    return (
        <div>
            <div id="Home" className="home-bg"></div>
            <div className="home-title">
            <h1>NICHOLAS RUDOLPH</h1>
            <div className="hr"></div>
            <h2>CYBERSECURITY STUDENT AT USF</h2>
            </div>
        </div>
    )
}
export default Home

