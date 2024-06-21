import { useState ,useEffect } from "react";
import AddGame from "./addGame";
import AddPhoto from "./addPhotoToGallery";
import "./adminPanel.css";
import EditGame from "./editGame";
import EditPhoto from "./editPhoto";
import avatar from "./assets/avatar.webp"
import { useNavigate} from "react-router-dom";


const AdminPanel = () => {
    const navigate = useNavigate()
    const PageEnum = {
        admin: "admin",
        addgame: "addgame",
        addphoto: "addphoto",
        editphoto:"editphoto",
        upcominggame:"upcominggame",
        screengallery:"screengallery"
    };
    const [showCurrentPage, setShowCurrentPage] = useState(PageEnum.admin);
    const [gameList, setGameList] = useState([]);
    const [dataToEdit,setDataToEdit] = useState({})
    const [imageList,setImageList] = useState([])
    const [photoToEdit , setPhotoToEdit] = useState({})

    useEffect(() => {
        const storedGameList = JSON.parse(sessionStorage.getItem("GameList") || "[]");
        setGameList(storedGameList);
    }, []);
    useEffect(()=>{
        const storedImageList = JSON.parse(sessionStorage.getItem("ImageList") || "[]")
        setImageList(storedImageList)
    },[])

    const openAddForm = () => {
        setShowCurrentPage(PageEnum.addgame);
    };

    const openAddPhotoForm = () => {
        setShowCurrentPage(PageEnum.addphoto);
    };
    
    const closeAddGameForm = () => {
        setShowCurrentPage(PageEnum.upcominggame);
    };
    const closeAddPhotoForm = ()=>{
        setShowCurrentPage(PageEnum.screengallery)
    }

    const submitData = (data) => {
        setGameList([...gameList, data]);
    };
    const onEditClickHnd = (data)=>{
        setShowCurrentPage(PageEnum.edit)
        setDataToEdit(data)
    }
    const submitDataPhoto = (data) => {
        setImageList([...imageList , data])
    };
    const onDeleteClickHnd = (data) =>{
        const index = gameList.findIndex(x=>x.id === data.id)
        const tempList = [...gameList]
        tempList.splice(index,1)
        console.log(tempList);
        sessionStorage.setItem("GameList", JSON.stringify(tempList));
        setGameList(tempList)
    }
    const updateData = (data)=>{
        const filteredData = gameList.filter(x=> x.id === data.id)[0];
        const indexOfRecord = gameList.indexOf(filteredData) 
        const tempData =[...gameList]
        tempData[indexOfRecord] = data
        sessionStorage.setItem("GameList" , JSON.stringify(tempData))
        setGameList(tempData)

        console.log(tempData);
    }
    const onDeleteClickHndImage = (data)=>{
        const index = imageList.findIndex((x)=>x.id===data.id)
        const tempList = [...imageList]
        tempList.splice(index,1)
        sessionStorage.setItem("ImageList" , JSON.stringify(tempList))
        setImageList(tempList)
    }
    const onEditClickHndImage = (data)=>{
        setShowCurrentPage(PageEnum.editphoto)
        setPhotoToEdit(data)
    }
    const updatePhoto = (data)=>{
        console.log(imageList);
        const filteredData = imageList.filter(x=>x.id === data.id)[0]
        const indexOfRecord = imageList.indexOf(filteredData)
        const tempData = [...imageList]
        tempData[indexOfRecord] = data
        sessionStorage.setItem('ImageList',JSON.stringify(tempData))
        setImageList(tempData)
        console.log(indexOfRecord);
    }
    const showGames = ()=>{
        setShowCurrentPage(PageEnum.upcominggame)
    }
    const showScreen = ()=>{
        setShowCurrentPage(PageEnum.screengallery)
    }
    if(showCurrentPage === PageEnum.upcominggame){
        let upcominggame= document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        upcominggame.style.color = "#2c2172"
        screengallery.style.color = "black"
    }
    else if(showCurrentPage === PageEnum.screengallery){
        let upcominggame= document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        upcominggame.style.color = "black"
        screengallery.style.color = "#2c2172"
    }
    const backToHome = ()=>{
        navigate("/home")
    }
    return (
        <div >
                <div className="admin-panel-main">
                <div className="admin-panel-left">
                    <div className="admin-panel-left-title-admin">
                        <img onClick={backToHome} className="avatar" src={avatar} alt="" />
                        <p>Orxan Ahmedov</p>
                        </div>
                    <div className="admin-panel-left-title-game" onClick={showGames}>Upcoming Games</div>
                    <div className="admin-panel-left-title-photo" onClick={showScreen}>Screen Gallery</div>
                </div>
                <div className="admin-panel">
                {showCurrentPage === PageEnum.admin && (
                        <div>
                            <h2>Welcome to the Admin Panel</h2>
                            <p>Please select an option from the left menu.</p>
                        </div>
                    )}
                    {showCurrentPage === PageEnum.upcominggame  && 
                    (<div className="upcoming-game">
                        <h2>Add Upcoming Game</h2>
                        <input className="add-game-btn" type="button" value="Add Game" onClick={openAddForm} />

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
                                {gameList.map((game) => (
                                    <tr  key={game.id}>
                                        <td>{game.id}</td>
                                        <td><img src={game.imageURL}  style={{ width: '100px', height: 'auto' }} /></td>
                                        <td>{game.text}</td>
                                        <td className="remove-edit-button">
                                            <button className="delete-btn" onClick={() => onDeleteClickHnd(game)} >x</button>
                                            <button className="edit-btn" onClick={()=>onEditClickHnd(game)}>Edit</button>
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
                                        <td><img src={image.imageURL}  style={{ width: '100px', height: 'auto' }} /></td>
                                        <td className="remove-edit-button">
                                            <button className="delete-btn" onClick={()=> onDeleteClickHndImage(image)}>x</button>
                                            <button className="edit-btn" onClick={()=> onEditClickHndImage(image)}>Edit</button>
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
