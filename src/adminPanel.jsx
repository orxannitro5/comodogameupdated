import { useState } from "react"
import AddGame from "./addGame"
import "./adminPanel.css"
const AdminPanel = ({onAddPageHnd})=>{
    const [showCurrentPage,setShowCurrentPage] = useState("admin")

    const PageEnum = {
        admin:"admin",
        add:"add"
    }
    const returnToAdminPanel = ()=>{
        setShowCurrentPage(PageEnum.admin)
    }
    const openAddForum = ()=>{
        setShowCurrentPage(PageEnum.add)
    }
    return (
        <div className="admin-page-main">
            {showCurrentPage === PageEnum.admin && <div className="admin-page">
            Admin Panel
            <input className="add-game-btn" type="button" value="Add Game" onClick={openAddForum} /> </div >}
            {showCurrentPage === PageEnum.add && 
            <AddGame onBackBtnHnd={returnToAdminPanel} onSubmitClickHnd={onAddPageHnd}  />
            }
            
        </div>
    )
}
export default AdminPanel