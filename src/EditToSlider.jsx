import React, { useState } from "react";
const EditToSlider = ({ onBackBtnHnd,onUpdateClickHnd,data})=>{
    const [user,setUser] = useState(data.user)
    const [stars,setStars] = useState(data.stars)
    const [location,setLocation] = useState(data.location)
    const [comment,setComment] = useState(data.comment)
    const onUserChangeHnd = (e)=>{
        console.log("dasdasd");
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
        const updateeddata = {
            id: data.id,
            user: user,
            stars: stars,
            location:location,
            comment:comment,
        }
        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    return (
   <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
                <h3 className="add-form-title">Edit User Form</h3>

                <div className="add-game-input">
                    <label >Name of user : </label>
                    <input onChange={onUserChangeHnd} value={data.user} type="text" />
                </div>
                <div className="add-game-input">
                    <label >How many stars?</label>
                    <input className="add-game-inputt" type="number" value={stars}  onChange={onStarChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Write your location</label>
                    <input className="add-game-inputt" type="text" value={location}  onChange={onLocationChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Your commentary</label>
                    <input className="add-game-inputt" type="text" value={comment}  onChange={onCommentaryChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Add Game" />
                </div>
            </form>
        </div>
        ) 
}
export default EditToSlider 