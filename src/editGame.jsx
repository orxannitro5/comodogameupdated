import React from "react"
import { useState } from "react"
import "./addGame.css";
const EditGame = ({onBackBtnHnd,onUpdateClickHnd,data})=>{
    const [text,setText] =useState(data.text)
    const onTextChangeHnd = (e)=>{
        setText(e.target.value)
    }
    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()
        const updateeddata ={
            id: data.id,
            text: text
        }
        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    return (
        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
            <h3 className="add-form-title">Update Game Form</h3>

                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input type="file" />
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
export default EditGame