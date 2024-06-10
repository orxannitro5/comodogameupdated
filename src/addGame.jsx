import React, { useState } from "react";
import "./addGame.css";
const AddGame = ({ onBackBtnHnd, onSubmitClickHnd }) => {
    const [text, setText] = useState("")
    const [imageURL, setImageURL] = useState("");
    const onTextChangeHnd = (e) => {
        setText(e.target.value)
    }
    const onSubmitBtnClickHnd = (e) => {
        e.preventDefault()

        const data = {
            id: new Date().toJSON().toString(),
            imageURL:imageURL,
            text: text
        }
        onSubmitClickHnd(data)
        onBackBtnHnd()

        
    }
    

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
        }
    };
    
    return (

        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
            <h3 className="add-form-title">Add Game Form</h3>

                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input onChange={handleFileChange} type="file" />
                    </div>
                <div className="add-game-input">
                    <label >Write Text for Game : </label>
                    <input className="add-game-inputt" type="text" value={text} onChange={onTextChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Add Game" />
                </div>
            </form>
        </div>
    )
}
export default AddGame