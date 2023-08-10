import "./Resume.css"
import React, {useState} from 'react';

const Resume = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
    setshow(!show)
    }

    return <div className="mainbox"><h1 className="res">Resume</h1>
                <br></br>
                <br></br>
            <div className='yr'>
            {
                show && <div className='curr_year'>
                    <p className='yrr'><b><i>I am studying third year</i></b></p>
                </div>
            }
               <button type='button' onClick={buttons1} className='year'><b><i>Year</i></b></button>
        </div>
            <div className="resmain">
                <div className='resflexbox'>   
                
                <div className='resbox'>
                <ul>
                <h3>Education</h3>
                    <li>10th </li>
                    <li>12th</li>
                </ul>
                
                </div>
                
                    
                <div className='resbox'>
                    <ul>
                        <h3>Skills</h3>
                        <li>Python</li> 
                        <li>html</li>
                        <li>css</li>
                        <li>Machine learning</li>
                        <li>ReactJS</li>

                    </ul>
                </div>
                <div className='resbox'>
                    <ul>
                    <h3> Hobbies</h3>
                        <li>Football</li>
                        <li>Watching movies</li>
                        <li>Music</li>
                    </ul>
                </div>
                
            </div> 
        </div>
        
          
          
    </div>;
  };
  
  export default Resume;