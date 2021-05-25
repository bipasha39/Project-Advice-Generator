import React, { useState, useEffect } from "react";
import "./advice.css";


import AdviceButton from "../adviceButton/AdviceButton";
function Advice() { 
    const[advice,setAdvice]=useState("");
    const getAdvice=()=>{
        fetch(`https://api.adviceslip.com/advice`)
            .then((res) => res.json())
            .then((data) => {
                setAdvice(data.slip.advice)
              console.log("Here is my ",data);
            })
            .catch((error) => {
                console.log(error);
              });           
    }
        useEffect(() => {
                getAdvice();
        }, []); 
      
        return <div className="Card">
            <h1>ADVICE</h1>
            <div className="advice-card">
            <p>{advice}</p>
            </div>
            
            <AdviceButton getAdvice={getAdvice}/>

        </div>;
      
  
}
export default Advice;