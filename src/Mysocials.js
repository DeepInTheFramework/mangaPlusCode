import './css/Mysocials.css'
import React, { useRef, useState, useEffect } from 'react';

export default function Mysocials () {
    const [isVisible, setIsVisible] = useState(false); //Save the state of wheter or not mySocials should be showed

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
      
      useEffect(() => {
        // Set a timeout to update the isVisible state after 7 seconds
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 7000);
    
        // Clean up the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timer);
      }, []);


            return (

                <div className="MySocialsContainer slide-in-bottom"
                style={{ display: isVisible ? 'flex' : 'none' }}
                >
                    <div className="linkedin"
                    onClick={() => window.open("https://www.linkedin.com/in/louis-emmanuel-metan-86b3b4268/", "_blank")}>
                        <span>Linkedin</span>
                    </div>

                    <div className="github"
                    onClick={() => window.open("https://github.com/DeepInTheFramework/mangaPlusCode", "_blank")}
                    >
                    <span>Github</span>
                    </div>

                    <div className="close"
                    onClick={() => toggleVisibility()}>
                    <span>Fermer</span>
                    </div>


                        {/* <div className="cv">
                            <span>Facebook</span>
                        </div> */}
                </div>
            )
}