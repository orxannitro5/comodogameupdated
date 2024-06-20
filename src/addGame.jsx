import React, { useState } from "react";
import "./addGame.css";
const AddGame = ({ onBackBtnHnd, onSubmitClickHnd }) => {
    const [text, setText] = useState("")
    const [imageURL, setImageURL] = useState("");
    const [fileLabel, setFileLabel] = useState("(Выберите Файл)")
    const [fileName, setFileName] = useState("")

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
        let gameList = sessionStorage.getItem("GameList");

        if (gameList === null) {
            gameList = [];
        }  else {
            // Парсим существующий список и проверяем, что это массив
            try {
                gameList = JSON.parse(gameList);
                if (!Array.isArray(gameList)) {
                    gameList = [];
                }
            } catch (e) {
                gameList = [];
            }
        }
        gameList.push(data);
        sessionStorage.setItem("GameList", JSON.stringify(gameList));
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
            <h3 className="add-form-title">Add Game Form</h3>

                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input onChange={handleFileChange} type="file" />
                    <span className="span-file">{fileLabel}  {fileName}</span>
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