import React from "react";
import './ui-intro-page.css';

const UiPageImage=({imgData})=>{
    return(
        <div>
            <img src={imgData} alt="Img" className="ui-main-container-components-img" />
        </div>
    )
}
export default UiPageImage;