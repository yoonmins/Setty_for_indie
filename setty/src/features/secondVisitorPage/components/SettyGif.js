import React from "react";
import './setty-gif.css';

const SettyGIFComponents = () =>{
    const settyGif = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/setty_gif_cut.gif";
    const settGifBackgorund ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_gif_background.png";

    return(
        <div className="setty-container">
            <img src={settGifBackgorund} alt="Setty GIF" className="setty-background"/>
            <img src={settyGif} alt="Setty GIF" className="setty-gif"/>
        </div>
    )
}
export default SettyGIFComponents