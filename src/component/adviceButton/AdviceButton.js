import React from 'react'
import "./adviceButton.css";

const AdviceButton =({getAdvice})=>{
    return(
        <div className="button-advice">
            <div>
            <button onClick={getAdvice} className="button">Give me one more</button>
            </div>
    
        </div>
    );

};

export default AdviceButton;