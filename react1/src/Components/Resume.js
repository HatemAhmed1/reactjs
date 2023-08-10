import "./Resume.css"

const Resume = () => {
    return <div className="mainbox"><h1 className="res">Resume</h1>
                <br></br>
                <br></br>

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