import React from "react"
import "./screens-gallery.css";


const PhotoList = ({ openAddForm, list , onDeleteClickHnd , onEditClickHnd }) => {
    return (
        <>
            <input className="add-game-btn" type="button" onClick={openAddForm} value="Add Image" />
            <div className="photo-list-main-block">
                {list.map(image => {
                    return (

                        <div key={image.id} className="photo-list-content">
                            <input className="map-content-button" type="button" value="X" onClick={onDeleteClickHnd} />
                            <div className="photo" style={{ backgroundImage: `url(${image.imageURL})` }}></div>
                            <div className="edit-view-buttons">
                                <input className="map-content-button" type="button" value="Edit" onClick={()=>onEditClickHnd(image)}  />
                                <input className="map-content-button" type="button" value="View"  />
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}
export default PhotoList