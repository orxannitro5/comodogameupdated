import React, {  useState } from "react"
import racer from "./assets/about_img.png.webp";
import "./about-us-block.css"
import AddGame from "./addGame"
import GameList from "./gameList"
import EditGame from "./editGame"
const PageEnum = {
    list :"list",
    add:"add",
    edit:"edit"
};
export default function Aboutusblock() {
    const [gameList,setGameList] = useState([])
    const [showCurrentPage, setShowCurrentPage] = useState(PageEnum.list)
    const [dataToEdit,setDataToEdit] = useState({})
    const openAddPage = () => {
        setShowCurrentPage(PageEnum.add)
    }
    
    const returnToMainPage = () => {
        setShowCurrentPage(PageEnum.list)
    }
    const _setGameList = (list)=>{
        setGameList(list)
        window.localStorage.setItem("GameList",JSON.stringify(list))

    }
    const openEditPage = (data)=>{
        setShowCurrentPage(PageEnum.edit)
        setDataToEdit(data)
        console.log("Data to edit:", dataToEdit);

    }
    const addGameHnd = (data)=>{
        _setGameList([...gameList,data])
        setShowCurrentPage(PageEnum.list)
    }
    const deleteGame = (data)=>{
        const indexToDelete = gameList.indexOf(data)
        const tempList = [...gameList]
        tempList.splice(indexToDelete,1)
        setGameList(tempList)
    }
    
    const updateData = (data)=>{
        const filteredData = gameList.filter(x=> x.id === data.id)[0];
        const indexOfRecord = gameList.indexOf(filteredData)
        const tempData =[...gameList]
        tempData[indexOfRecord] = data
        setGameList(tempData)
    }
    
    return (
        <div className="home-section-third-block">
            <div className="home-section-third-block-top">
                <div className="home-section-third-block-top-side-left-side">
                    <div className="home-section-third-block-top-side-left-side-content">
                        <p className="home-section-third-block-top-side-left-side-content-info">ABOUT US <br />________</p>
                        <h2 className="home-section-third-block-top-side-left-side-content-title">We Believe that
                            Interior beauty Lasts Long</h2>
                        <p className="home-section-third-block-top-side-left-side-content-text">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
                        <button className="home-section-third-block-top-side-left-side-content-button">LEARN MORE</button>
                    </div>
                </div>
                <div className="home-section-third-block-top-side-right-side">
                    <img className="racer-photo" src={racer} alt="" />
                </div>
            </div>
            <div className="home-section-third-block-title">
                <h1 className="home-section-third-block-low-opacity-title">UPCOMING GAMES</h1>
                <h1 className="home-section-third-block-high-opacity-title">UPCOMING GAMES</h1>
            </div>
            {showCurrentPage === PageEnum.add && <AddGame onBackBtnHnd={returnToMainPage} onSubmitClickHnd={addGameHnd}/>}
            {showCurrentPage === PageEnum.list  &&
                <GameList list={gameList} onEditClickHnd={openEditPage} onAddPageHnd={openAddPage} onDeleteClickHnd={deleteGame} />
            }
            {showCurrentPage === PageEnum.edit && <EditGame data={dataToEdit} onBackBtnHnd={returnToMainPage} onUpdateClickHnd={updateData} />}

        </div>
    )
}
