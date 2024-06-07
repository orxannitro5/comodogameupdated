import React, { useState } from "react";
import "./addGame.css";
const AddEmployee = ({onBackBtnHnd,onSubmitClickHnd}) => {
    const [text,setText] =useState("")
    const onTextChangeHnd = (e)=>{
        setText(e.target.value)
    }
    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()

        const data ={
            id: new Date().toJSON().toString(),
            text: text
        }
        onSubmitClickHnd(data)


    }
    return (
       
        <div className="add-game-main">
            <form onSubmit={onSubmitBtnClickHnd}>
                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input type="file"  />
                </div>
                <div className="add-game-input">
                    <label >Write Text for Game :</label>
                    <input type="text" value={text} onChange={onTextChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input type="button" value="Back" onClick={onBackBtnHnd} />
                    <input type="submit" value="Add Game"   />
                </div>
            </form>
        </div>
    )
}
export default AddEmployee