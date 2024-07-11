import React, { useEffect, useState } from "react"
import "./screens-gallery.scss";
import axios from "axios";


const PhotoList = () => {
    const [imageList,setImageList] = useState([])
    useEffect( ()=>{
        axios.get("http://localhost:4000/images")
        .then(response => setImageList(response.data))
        .catch(error => console.log("Error fetching data"))
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