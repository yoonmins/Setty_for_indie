import React from "react";
import'./ui-intro-page.css';

const UiIntroPageMainContaintForm = ({titleNumber, titleText, subTitleText, imgData, subTitleIcons}) =>{
    return(
        <div className="ui-main-container-components">
            <div className="ui-main-container-components-information">
                <h2 className="ui-main-container-components-title-number">{titleNumber}</h2>
                <h1 className="ui-main-container-components-title-text">{titleText}</h1>
                <span className="ui-main-container-components-subtitle-text">
                    <img src={subTitleIcons} alt="icon img" className="ui-main-container-components-subtitle-icons" />
                    <h3>{subTitleText}</h3>
                </span>
            </div>
            <img src={imgData} alt="UI FLow & Design Img" className="ui-main-container-components-img"/>
        </div>
    )
}

export default UiIntroPageMainContaintForm;