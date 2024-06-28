import React,{ useState } from "react";
const EditPlan = ({data,onBackBtnHnd,onUpdateClickHnd})=>{
    const [name,setName] = useState(data.name)
    const [price,setPrice] = useState(data.price)
    const [game1,setGame1] = useState(data.game1)
    const [game2,setGame2] = useState(data.game2)
    const [game3,setGame3] = useState(data.game3)
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
    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()
        const updateeddata = {
            id:data.id,
            name:name,
            price:price,
            game1:game1,
            game2:game2,
            game3:game3,
        }
        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    return(
        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
                <h3 className="add-form-title">Edit Plan Form</h3>

                <div className="add-game-input">
                    <label >Write name of package </label>
                    <input onChange={onNameChangeHnd} value={name} type="text" />
                </div>
                <div className="add-game-input">
                    <label >Price</label>
                    <input className="add-game-inputt" type="number" value={price}  onChange={onPriceChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 1</label>
                    <input className="add-game-inputt" type="text" value={game1}  onChange={onGame1ChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 2</label>
                    <input className="add-game-inputt" type="text"  value={game2}  onChange={onGame2ChangeHnd} />
                </div>
                <div className="add-game-input">
                    <label >Game 3</label>
                    <input className="add-game-inputt" type="text" value={game3}   onChange={onGame3ChangeHnd} />
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Edit Plan" />
                </div>
            </form>
        </div>
    )
}
export default EditPlan