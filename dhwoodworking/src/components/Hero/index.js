import React from 'react';
import "./style.css";

function Hero ({children}) {

        return (
            <div className="hero">
                {children}
            </div>
        )
    
}

export default Hero;