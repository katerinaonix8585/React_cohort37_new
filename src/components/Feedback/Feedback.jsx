import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback () {

    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);
    
    const onLike = () => {
        setCountLike((prevValue) => prevValue + 1);
      };

    const onDislike = () => {
        setCountDislike((prevValue) => prevValue + 1);
      };  

    const onReset = () => {
        setCountLike((prevValue) => 0);
        setCountDislike((prevValue) => 0);
      };    
    


    return (<div className="feedback-container">
        <div className="feedback-content-container">
            <Button name="Like" onButtonClick={onLike}/>
            <p>{countLike}</p>
        </div>
        <div className="feedback-content-container">
            <Button name="Dislike" onButtonClick={onDislike}/>
            <p>{countDislike}</p>
        </div>        
        <Button name="Reset Results" onButtonClick={onReset}/>
    </div>
    );    
}

export default Feedback;