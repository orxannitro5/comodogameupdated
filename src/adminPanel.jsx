import React, { useState, useEffect } from "react";
import AddGame from "./addGame";
import AddPhoto from "./addPhotoToGallery";
import "./adminPanel.scss";
import EditGame from "./editGame";
import EditPhoto from "./editPhoto";
import avatar from "./assets/avatar.png"
import axios from "axios";
import sidebaropen from "./assets/sidebar-right.svg"
import sidebarclose from "./assets/sidebar-left.svg"
import AddUser from "./addToSlider"
import EditUser from "./EditToSlider"
import AddPlan from "./addPlan";
import EditPlan from "./editPlan";
import AddBlog from "./addBlog";
import EditBlog from "./editBlog";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
    const PageEnum = {
        admin: "admin",
        addgame: "addgame",
        addphoto: "addphoto",
        editphoto: "editphoto",
        upcominggame: "upcominggame",
        screengallery: "screengallery",
        gamepad: "gamepad",
        adduser: "adduser",
        edituser: "edituser",
        plans: "plans",
        addplan: "addplan",
        editplan: "editplan",
        blog: "blog",
        addblog: "addblog",
        editblog: 'editblog'
    }


    const [showCurrentPage, setShowCurrentPage] = useState(PageEnum.admin);
    const [gameList, setGameList] = useState([]);
    const [dataToEdit, setDataToEdit] = useState({})
    const [imageList, setImageList] = useState([])
    const [photoToEdit, setPhotoToEdit] = useState({})
    const [search, setSearch] = useState("")
    const [gamepadList, setGamepadList] = useState([])
    const [userToEdit, setUserToEdit] = useState([])
    const [planList, setPlanList] = useState([])
    const [planToEdit, setPlanToEdit] = useState({})
    const [blogList, setBlogList] = useState([])
    const [blogToEdit, setBlogToEdit] = useState({})


    useEffect(() => {
        axios.get("http://localhost:4000/games")
            .then(response => {
                setGameList(response.data);
            })
            .catch(error => console.error("Error fetching games:", error));
    }, []);
    useEffect(() => {
        axios.get("http://localhost:4000/images")
            .then(response => {
                setImageList(response.data)
            })
            .catch(error => console.log("Error fetching games: ", error))
    }, [])
    useEffect(() => {
        axios.get("http://localhost:4000/users")
            .then(response => {
                setGamepadList(response.data)
            })
            .catch(error => console.log("Error fetching data: ", error))
    }, [])
    useEffect(() => {
        axios.get("http://localhost:4000/plans")
            .then(response => {
                setPlanList(response.data)
            })
            .catch(error => error)
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:4000/blogs`)
            .then(response => setBlogList(response.data))
            .catch(error => error)
    }, [])

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
                const tempList = imageList.filter((item) => item.id !== data.id)
                setImageList(tempList)
            })
            .catch(error => console.error('Error deleting item:', error));
    }
    const onEditClickHndImage = (data) => {
        setShowCurrentPage(PageEnum.editphoto)
        setPhotoToEdit(data)
    }
    const updatePhoto = (data) => {

        axios.put(`http://localhost:4000/images/${data.id}`, data)
            .then(response => {
                const updatedItems = imageList.map((item) => item.id === data.id ? response.data : item)
                setImageList(updatedItems)
            })
    }
    const showGames = () => {
        setShowCurrentPage(PageEnum.upcominggame)
    }
    const showScreen = () => {
        setShowCurrentPage(PageEnum.screengallery)
    }
    if (showCurrentPage === PageEnum.upcominggame) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        let gamepad = document.querySelector(".admin-panel-left-title-gamepad")
        let plan = document.querySelector(".admin-panel-left-title-plan")
        let blog = document.querySelector(".admin-panel-left-title-blog")


        upcominggame.style.backgroundColor = "#1c0b8d"
        screengallery.style.backgroundColor = "#2c2172"
        gamepad.style.backgroundColor = "#2c2172"
        plan.style.backgroundColor = "#2c2172"
        blog.style.backgroundColor = "#2c2172"


    }
    else if (showCurrentPage === PageEnum.screengallery) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        let gamepad = document.querySelector(".admin-panel-left-title-gamepad")
        let plan = document.querySelector(".admin-panel-left-title-plan")
        let blog = document.querySelector(".admin-panel-left-title-blog")

        upcominggame.style.backgroundColor = "#2c2172"
        screengallery.style.backgroundColor = "#1c0b8d"
        gamepad.style.backgroundColor = "#2c2172"
        plan.style.backgroundColor = "#2c2172"
        blog.style.backgroundColor = "#2c2172"

    }
    else if (showCurrentPage === PageEnum.gamepad) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        let gamepad = document.querySelector(".admin-panel-left-title-gamepad")
        let plan = document.querySelector(".admin-panel-left-title-plan")
        let blog = document.querySelector(".admin-panel-left-title-blog")

        upcominggame.style.backgroundColor = "#2c2172"
        screengallery.style.backgroundColor = "#2c2172"
        gamepad.style.backgroundColor = "#1c0b8d"
        plan.style.backgroundColor = "#2c2172"
        blog.style.backgroundColor = "#2c2172"

    }
    else if (showCurrentPage === PageEnum.plans) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        let gamepad = document.querySelector(".admin-panel-left-title-gamepad")
        let plan = document.querySelector(".admin-panel-left-title-plan")
        let blog = document.querySelector(".admin-panel-left-title-blog")
        upcominggame.style.backgroundColor = "#2c2172"
        screengallery.style.backgroundColor = "#2c2172"
        gamepad.style.backgroundColor = "#2c2172"
        plan.style.backgroundColor = "#1c0b8d"
        blog.style.backgroundColor = "#2c2172"
    }
    else if (showCurrentPage === PageEnum.blog) {
        let upcominggame = document.querySelector(".admin-panel-left-title-game")
        let screengallery = document.querySelector(".admin-panel-left-title-photo")
        let gamepad = document.querySelector(".admin-panel-left-title-gamepad")
        let plan = document.querySelector(".admin-panel-left-title-plan")
        let blog = document.querySelector(".admin-panel-left-title-blog")
        upcominggame.style.backgroundColor = "#2c2172"
        screengallery.style.backgroundColor = "#2c2172"
        gamepad.style.backgroundColor = "#2c2172"
        plan.style.backgroundColor = "#2c2172"
        blog.style.backgroundColor = "#1c0b8d"
    }
    const backToHome = () => {
        window.location.href = "http://localhost:3000"
    }
    const hideSidebar = () => {
        let sidebar = document.querySelector(".admin-panel-left")
        let opensidebar = document.querySelector(".open-sidebar")
        let minisidebar = document.querySelector(".admin-panel-left-smaller")
        sidebar.style.display = "none"
        minisidebar.style.display = "flex"
    }
    const openSidebar = () => {
        let sidebar = document.querySelector(".admin-panel-left")
        let opensidebar = document.querySelector(".open-sidebar")
        sidebar.style.display = "flex"
        opensidebar.style.display = "none"

    }
    const showFullSidebar = () => {
        let sidebar = document.querySelector(".admin-panel-left")
        let minisidebar = document.querySelector(".admin-panel-left-smaller")

        sidebar.style.display = "flex"
        minisidebar.style.display = "none"
    }
    const showGamepad = () => {
        setShowCurrentPage(PageEnum.gamepad)
    }
    const openAddUserForm = () => {
        setShowCurrentPage(PageEnum.adduser)
    }
    const closeAddUserForm = () => {
        setShowCurrentPage(PageEnum.gamepad)
    }
    const submitDataUser = (data) => {
        axios.post("http://localhost:4000/users", data)
            .then(response => {
                setGamepadList([...gamepadList, response.data])
                console.log(response.data);
            })
            .catch(error => console.log("Error Fetching data" + error))
    }
    const onDeleteClickHndUser = (data) => {
        axios.delete(`http://localhost:4000/users/${data.id}`)
            .then(() => {
                const tempList = gamepadList.filter((e) => e.id !== data.id)
                setGamepadList(tempList)
            })
            .catch(error => console.error('Error deleting item:', error));

    }
    const onEditClickHndUser = (data) => {
        setShowCurrentPage(PageEnum.edituser)
        setUserToEdit(data)
    }
    const updateUser = (data) => {
        axios.put(`http://localhost:4000/users/${data.id}`, data)
            .then(response => {
                const updatedUser = gamepadList.map((e) => e.id === data.id ? response.data : e)
                setGamepadList(updatedUser)
            })
            .catch(error => error)
    }
    const showPlans = () => {
        setShowCurrentPage(PageEnum.plans)
    }
    const openAddPlanForm = () => {
        setShowCurrentPage(PageEnum.addplan)
    }
    const closeAddPlanForm = () => {
        setShowCurrentPage(PageEnum.plans)
    }
    const submitDataPlan = (data) => {
        axios.post(`http://localhost:4000/plans`, data)
            .then(response => {
                setPlanList([...planList, response.data])
            })
            .catch(error => error)
    }
    const onDeleteClickHndPlan = (data) => {
        axios.delete(`http://localhost:4000/plans/${data.id}`)
            .then(() => {
                let tempList = planList.filter((e) => e.id !== data.id)
                setPlanList(tempList)
            }
            )
            .catch(error => error)
    }
    const onEditClickHndPlan = (data) => {
        setShowCurrentPage(PageEnum.editplan)
        setPlanToEdit(data)
    }
    const updatePlan = (data) => {
        axios.put(`http://localhost:4000/plans/${data.id}`, data)
            .then(response => {
                const updatedplan = planList.map((e) => e.id === data.id ? response.data : e)
                setPlanList(updatedplan)
            })
            .catch(error => error)
    }
    const showBlogs = () => {
        setShowCurrentPage(PageEnum.blog)
    }
    const openAddBlogForm = () => {
        setShowCurrentPage(PageEnum.addblog)
    }
    const closeAddBlogForm = () => {
        setShowCurrentPage(PageEnum.blog)
    }
    const submitDataBlog = (data) => {
        axios.post(`http://localhost:4000/blogs`, data)
            .then((response) => {
                setBlogList([...blogList, response.data])
            })
            .catch(error => error)
    }
    const onDeleteClickHndBlog = (data) => {
        axios.delete(`http://localhost:4000/blogs/${data.id}`)
            .then(() => {
                let tempList = blogList.filter((e) => e.id !== data.id)
                setBlogList(tempList)
            })
            .catch(error => error)
    }
    const onEditClickHndBlog = (data) => {
        setShowCurrentPage(PageEnum.editblog)
        setBlogToEdit(data)
    }
    const updateBlog = (data) => {
        axios.put(`http://localhost:4000/blogs/${data.id}`, data)
            .then(response => {
                let updatedList = blogList.map((e) => e.id === data.id ? response.data : e)
                setBlogList(updatedList)
                console.log(updatedList);

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="admin-panel-main">
                <div className="admin-panel-left">

                    <div className="a">
                        <div className="nav-to-home" onClick={backToHome}>🏠</div>
                        <img class="hide-sidebar" onClick={hideSidebar} src={sidebarclose} alt="" />
                    </div>

                    <div className="admin-panel-left-title-admin">
                        <img className="avatar" src={avatar} alt="" />
                        <p>Orxan Ahmedov</p>

                    </div>
                    <button className="admin-panel-left-title-game" onClick={showGames}>Upcoming Games</button>
                    <button className="admin-panel-left-title-photo" onClick={showScreen}>Screen Gallery</button>
                    <button className="admin-panel-left-title-gamepad" onClick={showGamepad}>Gamepad</button>
                    <button className="admin-panel-left-title-plan" onClick={showPlans}>Pricing Plans</button>
                    <button className="admin-panel-left-title-blog" onClick={showBlogs}>Blogs</button>


                </div>
                <div className="admin-panel-left-smaller">

                    <div className="a">
                        <div className="nav-to-home" onClick={backToHome}>🏠</div>
                        <img class="hide-sidebar" onClick={showFullSidebar} src={sidebaropen} alt="" />
                    </div>

                    <div className="admin-panel-left-title-admin">
                        <img className="avatar" src={avatar} alt="" />
                    </div>
                    <button className="admin-panel-left-title-game" onClick={showGames}>📣</button>
                    <button className="admin-panel-left-title-photo" onClick={showScreen}>🖼️</button>
                    <button className="admin-panel-left-title-gamepad" onClick={showGamepad}>🎮</button>
                    <button className="admin-panel-left-title-plan" onClick={showPlans}>💰</button>
                    <button className="admin-panel-left-title-blog" onClick={showBlogs}>📓</button>



                </div>

                <div className="admin-panel">
                    {showCurrentPage === PageEnum.admin && (
                        <div>
                            <h2>Welcome to the Admin Panel</h2>
                            <p>Please select an option from the left menu.</p>
                        </div>
                    )}
                    <button className="open-sidebar" onClick={openSidebar}>Open the menu</button>

                    {showCurrentPage === PageEnum.upcominggame &&
                        (<div className="upcoming-game">
                            <h2>Add Upcoming Game</h2>
                            <input className="add-game-btn" type="button" value="Add Game" onClick={openAddForm} />
                            <label className="search-engine-label"><span className="loupe">🔍</span>
                                <input className="search-engine" type="text" onChange={(e) => setSearch(e.target.value)} />
                            </label>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Game Background Photo</th>
                                        <th>Game Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gameList.filter((game) => {
                                        return search.toLowerCase() === ""
                                            ? game
                                            : game.text.toLowerCase().includes(search.toLowerCase());
                                    })
                                        .map((game) => (
                                            <tr key={game.id}>
                                                <td><img src={game.imageURL} style={{ width: '100px', height: 'auto' }} /></td>
                                                <td>{game.text}</td>
                                                <td className="remove-edit-button">
                                                    <button type="button" class="btn btn-danger" onClick={() => onDeleteClickHnd(game)} >x</button>
                                                    <button type="button" class="btn btn-secondary" onClick={() => onEditClickHnd(game)}>Edit</button>
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
                                                <button type="button" class="btn btn-danger" onClick={() => onDeleteClickHndImage(image)}>x</button>
                                                <button type="button" class="btn btn-secondary" onClick={() => onEditClickHndImage(image)}>Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                    {showCurrentPage === PageEnum.gamepad &&
                        <div className="gamepad-block">
                            <h2>Add Info About Users</h2>
                            <input className="add-game-btn" type="button" value="Add User" onClick={openAddUserForm} />
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Stars</th>
                                        <th>Location</th>
                                        <th>Commentary</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gamepadList.map((users) => (
                                        <tr key={users.id}>
                                            <td>{users.user}</td>
                                            <td>{users.stars}</td>
                                            <td>{users.location}</td>
                                            <td>{users.comment}</td>
                                            {/* <td><img src={image.imageURL} style={{ width: '100px', height: 'auto' }} /></td> */}
                                            <td className="remove-edit-button">
                                                <button type="button" class="btn btn-danger" onClick={() => onDeleteClickHndUser(users)}>x</button>
                                                <button type="button" class="btn btn-secondary" onClick={() => onEditClickHndUser(users)}>Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                    {showCurrentPage === PageEnum.plans &&
                        <div className="pricing-plans">
                            <h2>Add Pricing Plans</h2>
                            <input className="add-game-btn" type="button" value="Add Plan" onClick={openAddPlanForm} />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Price</th>
                                        <th>Game 1</th>
                                        <th>Game 2</th>
                                        <th>Game 3</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {planList.map((plan) => (
                                        <tr key={plan.id}>
                                            <td>{plan.name}</td>
                                            <td>{plan.price}</td>
                                            <td>{plan.game1}</td>
                                            <td>{plan.game2}</td>
                                            <td>{plan.game3}</td>
                                            {/* <td><img src={image.imageURL} style={{ width: '100px', height: 'auto' }} /></td> */}
                                            <td className="remove-edit-button">
                                                <button type="button" class="btn btn-danger" onClick={() => onDeleteClickHndPlan(plan)}>x</button>
                                                <button type="button" class="btn btn-secondary" onClick={() => onEditClickHndPlan(plan)}>Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                    {showCurrentPage === PageEnum.blog &&
                        <div className="admin-panel-latest-blog">
                            <h2>Add Latest Blog Posts</h2>
                            <input className="add-game-btn" type="button" value="Add Blog" onClick={openAddBlogForm} />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cover Of Blog</th>
                                        <th>Title Of Blog</th>
                                        <th>Content</th>
                                        <th>Date Of Publication</th>
                                        <th>Likes</th>
                                        <th>Comments</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogList.map((blog) => (
                                        <tr key={blog.id}>
                                            <td><img src={blog.imageURL} alt="" /></td>
                                            <td>{blog.title}</td>
                                            <td>{blog.text}</td>
                                            <td>{blog.date}</td>
                                            <td>{blog.likes}</td>
                                            <td>{blog.commentary}</td>

                                            <td className="remove-edit-button">
                                                <button type="button" class="btn btn-danger" onClick={() => onDeleteClickHndBlog(blog)}>x</button>
                                                <button type="button" class="btn btn-secondary" onClick={() => onEditClickHndBlog(blog)}>Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }

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
                    {showCurrentPage === PageEnum.adduser &&
                        <AddUser onBackBtnHnd={closeAddUserForm} onSubmitClickHnd={submitDataUser} />
                    }
                    {showCurrentPage === PageEnum.edituser &&
                        <EditUser onBackBtnHnd={closeAddUserForm} data={userToEdit} onUpdateClickHnd={updateUser} />
                    }
                    {showCurrentPage === PageEnum.addplan &&
                        <AddPlan onBackBtnHnd={closeAddPlanForm} onSubmitClickHnd={submitDataPlan} />
                    }
                    {showCurrentPage === PageEnum.editplan &&
                        <EditPlan onBackBtnHnd={closeAddPlanForm} data={planToEdit} onUpdateClickHnd={updatePlan} />
                    }
                    {showCurrentPage === PageEnum.addblog &&
                        <AddBlog onBackBtnHnd={closeAddBlogForm} onSubmitClickHnd={submitDataBlog} />
                    }
                    {showCurrentPage === PageEnum.editblog &&
                        <EditBlog onBackBtnHnd={closeAddBlogForm} data={blogToEdit} onUpdateClickHnd={updateBlog} />
                    }

                </div>
            </div>


        </div>
    );
};

export default AdminPanel;
