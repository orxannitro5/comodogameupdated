import React from "react";
import "./gallery.scss";
import ScreensGallery from "./screens-gallery";

export default function Gallery(){
    return(
        <div className="about-block">
            <div className="about-block-content">
                <div className="about-block-after-header">
                    <div className="about-block-after-header-content">
                        <h3 className="about-block-after-header-nav1">Home → Gallery </h3>
                        <h1  className="about-block-after-header-nav">SCREEN SHOT GALLERY</h1>
                    </div>
                </div>
                <ScreensGallery />
                
            </div>
        </div>
    )
}