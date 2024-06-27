import React, { useState } from "react";
const AddToSlider = ({ onBackBtnHnd, onSubmitClickHnd})=>{
    const [user,setUser] = useState("")
    const [stars,setStars] = useState()
    const [location,setLocation] = useState("")
    const [comment,setComment] = useState("")
    const onUserChangeHnd = (e)=>{
        setUser(e.target.value)
    }
    const onStarChangeHnd = (e)=>{
        setStars(e.target.value)
    }
    const onLocationChangeHnd = (e)=>{
        setLocation(e.target.value)
    }
    const onCommentaryChangeHnd = (e)=>{
        setComment(e.target.value)
    }
    const onSubmitBtnClickHnd = (e) => {
        e.preventDefault()
        const data = {
            id: new Date().toJSON().toString(),
            user: user,
            stars: stars,
            location:location,
            comment:comment,
        }

        onSubmitClickHnd(data)
        onBackBtnHnd()
    }
    return (
   <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
                <h3 className="add-form-title">Add User Form</h3>

                <div className="add-game-input">
                    <label >Name of user : </label>
                    <input onChange={onUserChangeHnd} type="text" />
                </div>
                <div className="add-game-input">
                    <label >How many stars?</label>
                    <input className="add-game-inputt" type="number"  onChange={onStarChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Write your location</label>
                    <input className="add-game-inputt" type="text"  onChange={onLocationChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Your commentary</label>
                    <input className="add-game-inputt" type="text"  onChange={onCommentaryChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Add Game" />
                </div>
            </form>
        </div>
        ) 
}
export default AddToSlider 