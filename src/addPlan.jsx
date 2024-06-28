import React, { useState } from "react";
const AddPlan = ({onBackBtnHnd,onSubmitClickHnd})=>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [game1,setGame1] = useState("")
    const [game2,setGame2] = useState("")
    const [game3,setGame3] = useState("")
    const onNameChangeHnd = (e)=>{
        setName(e.target.value)
    }
    const onPriceChangeHnd = (e)=>{
        setPrice(e.target.value)
    }
    const onGame1ChangeHnd = (e)=>{
        setGame1(e.target.value)
    }
    const onGame2ChangeHnd = (e)=>{
        setGame2(e.target.value)
    }
    const onGame3ChangeHnd = (e)=>{
        setGame3(e.target.value)
    }
    const onSubmitBtnClickHnd = (e) =>{
        e.preventDefault()
        const data = {
            id:new Date().toJSON().toString(),
            name:name,
            price:price,
            game1:game1,
            game2:game2,
            game3:game3,
        }
        onSubmitClickHnd(data)
        onBackBtnHnd()
    }
    return (

        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
                <h3 className="add-form-title">Add Plan Form</h3>

                <div className="add-game-input">
                    <label >Write name of package </label>
                    <input onChange={onNameChangeHnd} type="text" />
                </div>
                <div className="add-game-input">
                    <label >Price</label>
                    <input className="add-game-inputt" type="number"  onChange={onPriceChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 1</label>
                    <input className="add-game-inputt" type="text"  onChange={onGame1ChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 2</label>
                    <input className="add-game-inputt" type="text"   onChange={onGame2ChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 3</label>
                    <input className="add-game-inputt" type="text"   onChange={onGame3ChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Add Plan" />
                </div>
            </form>
        </div>
    )
}
export default AddPlan