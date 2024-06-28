import React,{useState} from "react"
const EditBlog = ({data,onUpdateClickHnd,onBackBtnHnd})=>{
    const [imageURL, setImageURL] = useState(data.imageURL);
    const [title,setTitle] = useState(data.title)
    const [text, setText] = useState(data.text)
    const [date,setDate] = useState(data.date)
    const [likes,setLikes] = useState(data.likes)
    const [commentary,setCommentray] = useState(data.commentary)
    const [fileLabel, setFileLabel] = useState("(Выберите Файл)")
    const [fileName, setFileName] = useState("")
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const url = event.target.result;
                setImageURL(url);
                setFileName(file.name);
                setFileLabel("Файл Выбран: " + file.name);
            };
            reader.readAsDataURL(file);
        }
    };
    const onTitleChangeHnd = (e) => {
        setTitle(e.target.value)
    }
    const onTextChangeHnd = (e) => {
        setText(e.target.value)
    } 
    const onLikeChangeHnd = (e) => {
        setLikes(e.target.value)
    } 
    const onDateChangeHnd = (e) => {
        setDate(e.target.value)
    } 
    const onCommentaryChangeHnd = (e) => {
        setCommentray(e.target.value)
    } 
    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()

        const updateeddata = {
            id: data.id,
            imageURL: imageURL,
            title:title,
            text: text,
            date:date,
            likes,likes,
            commentary,commentary
        }

        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    return (
        <div className="add-game-main">
        <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
            <h3 className="add-form-title">Update Blog Form</h3>

            <div className="add-game-input">
                <label >Choose Image : </label>
                <input onChange={handleFileChange} type="file" />
                <span className="span-file">{fileLabel}  {fileName}</span>
            </div>
            <div className="add-game-input">
                <label >Write Title for Blog : </label>
                <input className="add-game-inputt" type="text" value={title} onChange={onTitleChangeHnd} />
            </div>
            <div className="add-game-input">
                <label >Write Text for Blog : </label>
                <input className="add-game-inputt" type="text" value={text} onChange={onTextChangeHnd} />
            </div>
            <div className="add-game-input">
                <label >Date of Publication </label>
                <input className="add-game-inputt" type="date" value={date} onChange={onDateChangeHnd} />
            </div>
            <div className="add-game-input">
                <label >Amount Of Likes </label>
                <input className="add-game-inputt" type="number" value={likes} onChange={onLikeChangeHnd} />
            </div>
            <div className="add-game-input">
                <label >Amount Of Comments </label>
                <input className="add-game-inputt" type="text" value={commentary} onChange={onCommentaryChangeHnd} />
            </div>
            <div className="back-add-buttons">
                <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                <input className="add-btn" type="submit" value="Edit Blog" />
            </div>
        </form>
    </div>
    )
}
export default EditBlog