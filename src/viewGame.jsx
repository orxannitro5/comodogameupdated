import React from "react";
import "./viewGame.css";
const ViewGame = ({onClose,data}) => {
    return (
        <>


            <div id="myModal" class="modal">

                <div class="modal-content">
                    <span onClick={onClose} class="close">&times;</span>
                    <h3>Game Data</h3>
                    <div>
                        <label> Game Text : {data.text}</label>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ViewGame