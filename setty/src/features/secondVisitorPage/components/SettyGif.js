import React from "react";

const SettyGIFComponents = () =>{
    const settyGif = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_gif.gif";
    const settGifBackgorund ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_gif_background.png";

    return(
        <div>
            <img src={settyGif} alt="Setty GIF" className="setty-gif"/>
            <img src={settGifBackgorund} alt="Setty GIF"/>
        </div>
    )
}
export default SettyGIFComponents