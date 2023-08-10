import './Home.css'
import React, {useState} from 'react';


const Home = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
    setshow(!show)
    }
    
    return <div className="homemain">
        <div className='home'>
            <h1 >About Me</h1>
            <h1>Hatem Ahmed</h1>
            <h2>Pursuing Artifcial Intelligence and Data Science</h2>
        </div>
        <div className='yr'>
            {
                show && <div className='curr_year'>
                    <p className='yrr'><b><i>I am studying third year</i></b></p>
                </div>
            }
               <button type='button' onClick={buttons1} className='year'><b><i>Year</i></b></button>
        </div>
        
        <div className="homebox">
            <div id="box" className="homeboxx">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="homeboxx">
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
        
        </div>
    ;
  };
  
  export default Home;