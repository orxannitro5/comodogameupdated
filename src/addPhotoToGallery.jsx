import React,{useState} from "react";
import "./addGame.css";
const AddPhotoToGallery = ({ onBackBtnHnd, onSubmitClickHnd })=>{
    const [imageURL, setImageURL] = useState("");
    const [fileLabel, setFileLabel] = useState("(Выберите Файл)")
    const [fileName, setFileName] = useState("")
    const onSubmitBtnClickHnd = (e) => {
        e.preventDefault()

        const data = {
            id: new Date().toJSON().toString(),
            imageURL:imageURL,
        }
        let imageList = sessionStorage.getItem("ImageList");

        if (imageList === null  ) {
            imageList = [];
        }  else {
            // Парсим существующий список и проверяем, что это массив
            try {
                imageList = JSON.parse(imageList);
                if (!Array.isArray(imageList)) {
                    imageList = [];
                }
            } catch (e) {
                imageList = [];
            }
        }
        imageList.push(data);
        sessionStorage.setItem("ImageList", JSON.stringify(imageList));
        onSubmitClickHnd(data)
        onBackBtnHnd()
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
            setFileName(file.name)
            setFileLabel(" Файл Выбран :  " +fileName)
        }
    };
    return (
        <div className="add-game-main">
        <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
        <h3 className="add-form-title">Add Photo Form</h3>
            <div className="add-game-input">
                <label >Choose Image : </label>
                <input onChange={handleFileChange} type="file" />
                <span className="span-file">{fileLabel}  {fileName}</span>
                </div>
            <div className="back-add-buttons">
                <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                <input className="add-btn" type="submit" value="Add Game" />
            </div>
        </form>
    </div>
    )
}
export default AddPhotoToGallery