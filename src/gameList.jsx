import React, { useState, useEffect } from "react";
import "./about-us-block.css";
import ViewGame from "./viewGame";

const GameList = ({ list, onEditClickHnd}) => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        const storedGameList = JSON.parse(sessionStorage.getItem("GameList") || "[]");
        setGameList(storedGameList);
    }, []);
    
   

    

    return (
        <div className="home-section-upcoming-games">
            <div className="home-section-third-block-last-block">
                {gameList.map((game) => (
                    <div className="map-content" key={game.id}>
                        <div className="home-section-third-block-last-block-content" style={{ backgroundImage: `url(${game.imageURL})` }}>
                            <div className="home-section-third-block-text">{game.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;
