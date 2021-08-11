import React from 'react';
import './experience.css';
function Experience() {
    return (
        <>
            <div id="Experience" className="experience"> 
                <h1 style={{marginTop: "50px"}}>Experience</h1>
                <div class="container" style={{marginTop: "50px", marginLeft: "20px", marginRight: "20px"}}> 
                <h2>Resilience, Inc. SEL</h2>
                <h4>Software Engineer</h4>
                <h6>Developed an android application with AI integration to aid students in social emotional learning.
                    Designed a SQL database for account creation. Implemented an express server within React Native to communicate with 
                    the database, the web application, and the client. Integrated Axios API to request and handle data from the client.
                    Created components within react native for user functionality.</h6>
                </div>
            </div>
        </>
    )
}
export default Experience