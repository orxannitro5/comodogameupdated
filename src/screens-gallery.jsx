import React, { useState,useEffect } from "react";
import "./screens-gallery.scss";
import PhotoList from "./photoList"


export default function ScreensGallery() {
    const [showPageInGallery,setShownPageInGallery] = useState("list")

    const PageEnumForGallery = {
        list:"list",
        add:"add"
    }
    
    
    return (
        <div className="screens-gallery-main">
            <div className="screens-gallery-main-title">
                <h1 className="screens-gallery-main-low-opacity-title">Screens Gallery</h1>
                <h1 className="screens-gallery-main-high-opacity-title">Screens Gallery</h1>
            </div>
            {showPageInGallery === PageEnumForGallery.list && <PhotoList  />}
        </div>
    )
}