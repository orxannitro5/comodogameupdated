import React, { useState } from "react";
import "./screens-gallery.css";
import AddForm from "./addPhotoToGallery";
import PhotoList from "./photoList"
import EditPage from "./editPhoto"
import galleryfirstimage from "./assets/gallery_img1.png.webp";
import gallerysecondimage from "./assets/gallery_img2.png.webp";
import gallerythirdimage from "./assets/gallery_img3.png.webp";
import galleryfourthimage from "./assets/gallery_img4.png.webp";

export default function ScreensGallery() {
    const [imageList,setImageList] = useState([])
    const [showPageInGallery,setShownPageInGallery] = useState("list")
    const [dataToEdit,setDataToEdit] = useState({})

    const PageEnumForGallery = {
        list:"list",
        add:"add"
    }
    const openAddForm = ()=>{
        setShownPageInGallery(PageEnumForGallery.add)
    }
    const returnToMain = ()=>{
        setShownPageInGallery(PageEnumForGallery.list)
    }
    const addImageHnd = (data)=>{
        setImageList([...imageList,data])
        setShownPageInGallery(PageEnumForGallery.list)
    }
    const deleteImage = (data)=>{
        const indexToDelete = imageList.indexOf(data)
        const tempList = [...imageList]
        tempList.splice(indexToDelete,1)
        setImageList(tempList)
    }
    const openEditPage = (data)=>{
        setShownPageInGallery(PageEnumForGallery.edit)
        setDataToEdit(data)
    }
    const updatePhoto = (data)=>{
        const filteredData = imageList.filter((x)=> x.id === data.id)[0]
        const indexOfRecord = imageList.indexOf(filteredData)
        const tempData = [...imageList]
        tempData[indexOfRecord] = data
        setImageList(tempData)
    }
    return (
        <div className="screens-gallery-main">
            <div className="screens-gallery-main-title">
                <h1 className="screens-gallery-main-low-opacity-title">Screens Gallery</h1>
                <h1 className="screens-gallery-main-high-opacity-title">Screens Gallery</h1>
            </div>
            {showPageInGallery === PageEnumForGallery.add && <AddForm onBackBtnHnd={returnToMain} onSubmitClickHnd={addImageHnd} />}
            {showPageInGallery === PageEnumForGallery.list && <PhotoList list={imageList} openAddForm={openAddForm} onDeleteClickHnd={deleteImage} onEditClickHnd={openEditPage} />}
            {showPageInGallery === PageEnumForGallery.edit && <EditPage  onBackBtnHnd={returnToMain} data={dataToEdit} onUpdateClickHnd={updatePhoto} />}
            <div className="screens-gallery-photos">
                {/* <div className="screens-gallery-left-side">
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
                </div> */}

            </div>
        </div>
    )
}