import React, { useState, useEffect } from "react";
import "./about-us-block.css";
import ViewGame from "./viewGame";

const GameList = ({ list, onEditClickHnd}) => {
    const [gameList, setGameList] = useState([]);

    // useEffect(() => {
    //     const storedGameList = JSON.parse(sessionStorage.getItem("GameList") || "[]");
    //     setGameList(storedGameList);
    // }, []);
    const onDeleteClickHnd = (data) =>{
        const index = gameList.findIndex(x=>x.id === data.id)
        const tempList = [...gameList]
        tempList.splice(index,1)
        sessionStorage.setItem("GameList", JSON.stringify(tempList));
        setGameList(tempList)
    }
   

    

    return (
        <div className="home-section-upcoming-games">
            <div className="home-section-third-block-last-block">
                {gameList.map((game) => (
                    <div className="map-content" key={game.id}>
                        <input className="map-content-button" type="button" value="X" onClick={() => onDeleteClickHnd(game)} />
                        <div className="home-section-third-block-last-block-content" style={{ backgroundImage: `url(${game.imageURL})` }}>
                            <div className="home-section-third-block-text">{game.text}</div>
                        </div>
                        <div className="edit-view-buttons">
                            <input className="map-content-button" type="button" value="Edit" onClick={() => onEditClickHnd(game)} />
                            <input className="map-content-button" type="button" value="View" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;
