import React from "react";
import "./screens-gallery.css";
import galleryfirstimage from "./assets/gallery_img1.png.webp";
import gallerysecondimage from "./assets/gallery_img2.png.webp";
import gallerythirdimage from "./assets/gallery_img3.png.webp";
import galleryfourthimage from "./assets/gallery_img4.png.webp";

export default function screensGallery() {
    return (
        <div className="screens-gallery-main">
            <div className="screens-gallery-main-title">
                <h1 className="screens-gallery-main-low-opacity-title">Screens Gallery</h1>
                <h1 className="screens-gallery-main-high-opacity-title">Screens Gallery</h1>
            </div>
            <div className="screens-gallery-photos">
                <div className="screens-gallery-left-side">
                    <div className="screens-gallery-left-side-first-row">
                        <img className="screens-gallery-left-side-first-row-image" src={galleryfirstimage} alt="" />
                        <img className="screens-gallery-left-side-first-row-image" src={gallerysecondimage} alt="" />
                    </div>
                    <div className="screens-gallery-left-side-second-row">
                        <img className="screens-gallery-left-side-second-row-image" src={gallerythirdimage} alt="" />
                    </div>

                </div>
                <div className="screens-gallery-right-side">
                    <img src={galleryfourthimage} alt="" />
                </div>

            </div>
        </div>
    )
}