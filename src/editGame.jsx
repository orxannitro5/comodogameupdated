import React from "react"
import { useState } from "react"
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
                    <input type="submit" value="Update Game"   />
                </div>
            </form>
        </div>
    )
}
export default EditGame