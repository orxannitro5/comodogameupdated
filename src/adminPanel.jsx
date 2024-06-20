import { useState } from "react"
import AddGame from "./addGame"
import "./adminPanel.css"
const AdminPanel = () => {
    const [showCurrentPage, setShowCurrentPage] = useState(true)
    const openAddForm = ()=>{
        setShowCurrentPage(false)
    }
    const closeAddForm = ()=>{
        setShowCurrentPage(true)
    }
    const submitData = (data)=>{
        console.log(data);
    }
    return (
        <div className="admin-panel-main">
            {showCurrentPage &&
                <div className="admin-panel">
                    <input className="add-game-btn" type="button" value="Add Game" onClick={openAddForm}/>
                </div>
            }
            {showCurrentPage === false &&
                <AddGame onBackBtnHnd={closeAddForm} onSubmitClickHnd={submitData}/>
            }
        </div>
    )
}
export default AdminPanel