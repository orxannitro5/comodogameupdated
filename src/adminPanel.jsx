import { useState, useEffect } from "react";
import AddGame from "./addGame";
import AddPhoto from "./addPhotoToGallery";
import "./adminPanel.css";
import EditGame from "./editGame";
import EditPhoto from "./editPhoto";
import avatar from "./assets/avatar.png"
import axios from "axios";

const AdminPanel = () => {
    const PageEnum = {
        admin: "admin",
        addgame: "addgame",
        addphoto: "addphoto",
        editphoto: "editphoto",
        upcominggame: "upcominggame",
        screengallery: "screengallery"
    };
    const [showCurrentPage, setShowCurrentPage] = useState(PageEnum.admin);
    const [gameList, setGameList] = useState([]);
    const [dataToEdit, setDataToEdit] = useState({})
    const [imageList, setImageList] = useState([])
    const [photoToEdit, setPhotoToEdit] = useState({})
    const [search,setSearch] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/games")
            .then(response => {
                setGameList(response.data);
            })
            .catch(error => console.error("Error fetching games:", error));
    }, []);
    useEffect (()=>{
        axios.get("http://localhost:4000/images")
        .then(response => {
            setImageList(response.data)
        })
        .catch(error => console.log("Error fetching games: ",error  ))
    })
    // useEffect(() => {
    //     const storedGameList = JSON.parse(sessionStorage.getItem("GameList") || "[]");
    //     setGameList(storedGameList);
    // }, []);
    // useEffect(() => {
    //     const storedImageList = JSON.parse(sessionStorage.getItem("ImageList") || "[]")
    //     setImageList(storedImageList)
    // }, [])

    const openAddForm = () => {
        setShowCurrentPage(PageEnum.addgame);
    };

    const openAddPhotoForm = () => {
        setShowCurrentPage(PageEnum.addphoto);
    };

    const closeAddGameForm = () => {
        setShowCurrentPage(PageEnum.upcominggame);
    };
    const closeAddPhotoForm = () => {
        setShowCurrentPage(PageEnum.screengallery)
    }

    const submitData = (data) => {
        axios.post('http://localhost:4000/games', data)
        .then(response => {
            setGameList([...gameList, response.data]);
            console.log(response.data.imageURL);
        })
        .catch(error => console.error('Error adding item:', error));
    };
    const onEditClickHnd = (data) => {
        setShowCurrentPage(PageEnum.edit)
        setDataToEdit(data)
    }
    const submitDataPhoto = (data) => {
        axios.post('http://localhost:4000/images', data)
        .then(response => {
            setImageList([...imageList, response.data])
        })
        .catch(error => console.error('Error adding item:', error));
    };
    const onDeleteClickHnd = (data) => {
        
        axios.delete(`http://localhost:4000/games/${data.id}`)
            .then(() => {
                const tempList = gameList.filter(item => item.id !== data.id);
                setGameList(tempList);
            })
            .catch(error => console.error('Error deleting item:', error));
    }
    const updateData = (data) => {
        
        axios.put(`http://localhost:4000/games/${data.id}`, data)
        .then(response => {
            const updatedItems = gameList.map(item => item.id === data.id ? response.data : item);
            setGameList(updatedItems);
            console.log(updatedItems);
        })
        .catch(error => console.error('Error updating item:', error));

    }
    const onDeleteClickHndImage = (data) => {
       
        axios.delete(`http://localhost:4000/images/${data.id}`)
        .then(() => {
            const tempList = gameList.filter((item)=> item.id !== data.id )
            setImageList(tempList)
        })
        .catch(error => console.error('Error deleting item:', error));
    }
    const onEditClickHndImage = (data) => {
        setShowCurrentPage(PageEnum.editphoto)
        setPhotoToEdit(data)
    }
    const updatePhoto = (data) => {
        // console.log(imageList);
        // const filteredData = imageList.filter(x => x.id === data.id)[0]
        // const indexOfRecord = imageList.indexOf(filteredData)
        // const tempData = imageList]
        // tempData[indexOfRecord] = data
        // sessionStorage.setItem('ImageList', JSON.stringify(tempData))
        // setImageList(tempData)
        axios.put(`http://localhost:4000/images/${data.id}`,data)
        .then(response =>{
            const updatedItems = imageList.map((item)=> item.id === data.id ? response.data : item)
            setImageList(updatedItems)
        })}
    const showGames = () => {
        setShowCurrentPage(PageEnum.upcominggame)
    }
    const showScreen = () => {
        setShowCurrentPage(PageEnum.screengallery)
    }
    if (showCurrentPage === PageEnum.upcominggame) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        upcominggame.style.backgroundColor = "#1c0b8d"
        screengallery.style.backgroundColor = "#2c2172"
    }
    else if (showCurrentPage === PageEnum.screengallery) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        upcominggame.style.backgroundColor = "#2c2172"
        screengallery.style.backgroundColor = "#1c0b8d"
    }
    const backToHome = () => {
        window.location.href = "http://localhost:3000"
    }
    return (
        <div >
            <div className="admin-panel-main">
                <div className="admin-panel-left">
                    <div className="admin-panel-left-title-admin">
                        <img onClick={backToHome} className="avatar" src={avatar} alt="" />
                        <p>Orxan Ahmedov</p>
                    </div>
                    <button className="admin-panel-left-title-game" onClick={showGames}>Upcoming Games</button>
                    <button className="admin-panel-left-title-photo" onClick={showScreen}>Screen Gallery</button>
                </div>
                <div className="admin-panel">
                    {showCurrentPage === PageEnum.admin && (
                        <div>
                            <h2>Welcome to the Admin Panel</h2>
                            <p>Please select an option from the left menu.</p>
                        </div>
                    )}
                    {showCurrentPage === PageEnum.upcominggame &&
                        (<div className="upcoming-game">
                            <h2>Add Upcoming Game</h2>
                            <input className="add-game-btn" type="button" value="Add Game" onClick={openAddForm} />
                            <label className="search-engine-label"><span className="loupe">🔍</span>
                            <input className="search-engine" type="text" onChange={(e)=> setSearch(e.target.value)} /></label>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Game Id</th>
                                        <th>Game Background Photo</th>
                                        <th>Game Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gameList.filter((game)=>{
                                        return search.toLowerCase() === "" 
                                        ? game 
                                        : game.text.toLowerCase().includes(search.toLowerCase()); })
                                        .map((game) => (
                                        <tr key={game.id}>
                                            <td>{game.id}</td>
                                            <td><img src={game.imageURL} style={{ width: '100px', height: 'auto' }} /></td>
                                            <td>{game.text}</td>
                                            <td className="remove-edit-button">
                                                <button className="delete-btn" onClick={() => onDeleteClickHnd(game)} >x</button>
                                                <button className="edit-btn" onClick={() => onEditClickHnd(game)}>Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>)}
                    {showCurrentPage === PageEnum.screengallery &&
                        <div className="screen-gallery">
                            <h2>Add Photo</h2>
                            <input className="add-game-btn" type="button" value="Add Photo" onClick={openAddPhotoForm} />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Game Id</th>
                                        <th>Game Background Photo</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {imageList.map((image) => (
                                        <tr key={image.id}>
                                            <td>{image.id}</td>
                                            <td><img src={image.imageURL} style={{ width: '100px', height: 'auto' }} /></td>
                                            <td className="remove-edit-button">
                                                <button className="delete-btn" onClick={() => onDeleteClickHndImage(image)}>x</button>
                                                <button className="edit-btn" onClick={() => onEditClickHndImage(image)}>Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                    {showCurrentPage === PageEnum.addgame && (
                        <AddGame onBackBtnHnd={closeAddGameForm} onSubmitClickHnd={submitData} />
                    )}
                    {showCurrentPage === PageEnum.edit &&
                        <EditGame data={dataToEdit} onBackBtnHnd={closeAddGameForm} onUpdateClickHnd={updateData} />}

                    {showCurrentPage === PageEnum.addphoto && (
                        <AddPhoto onBackBtnHnd={closeAddPhotoForm} onSubmitClickHnd={submitDataPhoto} />
                    )}
                    {showCurrentPage === PageEnum.editphoto &&
                        <EditPhoto onBackBtnHnd={closeAddPhotoForm} data={photoToEdit} onUpdateClickHnd={updatePhoto} />
                    }


                </div>
            </div>


        </div>
    );
};

export default AdminPanel;
