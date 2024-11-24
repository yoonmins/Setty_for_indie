import React from "react";
import'./ui-intro-page.css';

const UiIntroPageMainContaintForm = ({titleNumber, titleText, imgData, showMusicIcon, showTouchIcon }) =>{
        // icon img data 
        const touchIcons = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/touch_icon.png";
        const musicIcons = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/muisc_icon.png";
    return(
        <div className="ui-main-container-components">
            <div className="ui-main-container-components-information">
                <h2 className="ui-main-container-components-title-number">{titleNumber}</h2>
                <h1 className="ui-main-container-components-title-text">{titleText}</h1>
                <span className="ui-main-container-components-subtitle-text">
                    {showMusicIcon && (
                        <>
                            <img src={musicIcons} alt="icon img" className="subtitle-music-icons" />
                            <h3>보이스 인터랙션</h3>
                        </>
                    )}
                    {showTouchIcon && (
                        <>
                            <img src={touchIcons} alt="icon img" className="subtitle-touch-icons" />
                            <h3>제스쳐 인터랙션</h3>
                        </>
                    )}
                </span>
            </div>
            <img src={imgData} alt="UI FLow & Design Img" className="ui-main-container-components-img"/>
        </div>
    )
}

export default UiIntroPageMainContaintForm;