import React, { useState } from "react"
import "./about-us-block.css"
import ViewGame from "./viewGame"

const GameList = ({ onAddPageHnd, list, onDeleteClickHnd , onEditClickHnd  }) => {
    const [showModal,setShowModal] = useState(false);
    const [dataToShow,setDataToShow] = useState(null)
    const onViewClickHnd = (data)=>{
        setShowModal(true)
        setDataToShow(data)
    }
    const closeModalPage = ()=>{
        setShowModal(false)
    }
    return (
        <div className="home-section-upcoming-games">
            <input className="add-game-btn" type="button" value="Add Game" onClick={onAddPageHnd} />
            <div className="home-section-third-block-last-block">

                {list.map(game => {
                    return (
                        <div className="map-content">
                            <input className="map-content-button" type="button" value="X" onClick={onDeleteClickHnd} />
                            <div className="home-section-third-block-last-block-content" key={game.id}>
                                <div className="home-section-third-block-text">{game.text}</div>
                            </div>
                            <div className="edit-view-buttons">
                                <input className="map-content-button" type="button" value="Edit" onClick={() => onEditClickHnd(game)} />
                                <input className="map-content-button" type="button" value="View" onClick={() => onViewClickHnd(game)}  />
                            </div>
                        </div>
                    )
                })}
                {showModal && <ViewGame data={dataToShow} onClose={closeModalPage} /> }

            </div>
        </div>
    )
}
export default GameList