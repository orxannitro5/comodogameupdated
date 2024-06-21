import React, { useEffect, useState } from "react"
import "./screens-gallery.css";


const PhotoList = ({onEditClickHnd }) => {
    const [imageList,setImageList] = useState([])
    useEffect( ()=>{
        const storedImageList = sessionStorage.getItem("ImageList");
        if (storedImageList) {
            setImageList(JSON.parse(storedImageList));
        }
    }, []);

    
    return (
        <>
            <div className="photo-list-main-block">
                {imageList.map((image) => {
                    return (
                        <div key={image.id} className="photo-list-content">
                            <div className="photo" style={{ backgroundImage: `url(${image.imageURL})` }}></div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default PhotoList