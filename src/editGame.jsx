import React from "react"
import { useState } from "react"
import "./addGame.css";
const EditGame = ({onBackBtnHnd,onUpdateClickHnd,data})=>{
    const [text,setText] =useState(data.text)
    const [imageURL, setImageURL] = useState(data.imageURL);
    const [fileLabel, setFileLabel] = useState("(Выберите Файл)")
    const [fileName, setFileName] = useState("")

    const onTextChangeHnd = (e)=>{
        setText(e.target.value)
    }
    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()
        const updateeddata ={
            id: data.id,
            imageURL:imageURL,
            text: text
        }
        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const url = event.target.result;
                setImageURL(url);
                setFileName(file.name);
                setFileLabel("Файл Выбран: " + file.name);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
            <h3 className="add-form-title">Update Game Form</h3>

                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input onChange={handleFileChange} type="file"   />
                    <span className="span-file">{fileLabel}</span>
                </div>
                <div className="add-game-input">
                    <label >Write Text for Game : </label>
                    <input className="add-game-inputt" type="text" value={text} onChange={onTextChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Update Game" />
                </div>
            </form>
        </div>
    )
}
export default EditGame