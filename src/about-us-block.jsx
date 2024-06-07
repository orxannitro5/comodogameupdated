import React, { useEffect, useState } from "react"
import racer from "./assets/about_img.png.webp";
import playstation from "./assets/b_map1.png.webp";
import darts from "./assets/b_map2.png.webp";
import playstationimg from "./assets/b_map3.png.webp";
import "./about-us-block.css"
import americanfootball from "./assets/b_map4.png.webp";
import AddGame from "./addGame"
import GameList from "./gameList"
export default function Aboutusblock() {
    const [gameList,setGameList] = useState([])
    const [showAddPage, setShowAddPage] = useState(false)
    const openAddPage = () => {
        setShowAddPage(true)
    }
    // useEffect(()=>{
    //     const listInString = window.localStorage.getItem("GameList")
    //     if(listInString){
    //         setGameList(JSON.parse(listInString))
    //     }
        
    // },[])
    const returnToMainPage = () => {
        setShowAddPage(false)
    }
    const _setGameList = (list)=>{
        setGameList(list)
        window.localStorage.setItem("GameList",JSON.stringify(list))

    }
    const addGameHnd = (data)=>{
        _setGameList([...gameList,data])
        setShowAddPage(false)
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
            {showAddPage && <AddGame onBackBtnHnd={returnToMainPage} onSubmitClickHnd={addGameHnd}/>}
            {showAddPage === false &&
                <GameList list={gameList} onAddPageHnd={openAddPage} />
            }

        </div>
    )
}
