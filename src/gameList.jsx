import React from "react"
import "./about-us-block.css"

const gameList = ({ onAddPageHnd, list }) => {
    return (
        <div className="home-section-upcoming-games">
        <input className="add-game-btn" type="button" value="Add Game" onClick={onAddPageHnd} />
        <div className="home-section-third-block-last-block">
            
            {list.map(game => {
                return (
                    <div className="home-section-third-block-last-block-content" key={game.id}>
                        <div className="home-section-third-block-text">{game.text}</div>
                    </div>  
                )
            })}


        </div>
        </div>
    )
}
export default gameList