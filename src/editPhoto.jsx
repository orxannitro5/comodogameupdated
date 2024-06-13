import { useState } from "react";

const EditPhoto = ({onBackBtnHnd,onUpdateClickHnd,data}) => {
    const [imageURL, setImageURL] = useState(data.imageURL);
    const [fileLabel, setFileLabel] = useState("(Выберите Файл)")
    const [fileName, setFileName] = useState("")

    const onSubmitBtnClickHnd = (e)=>{
        e.preventDefault()
        const updateeddata ={
            id: data.id,
            imageURL:imageURL,
        }
        onUpdateClickHnd(updateeddata)
        onBackBtnHnd()
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
            setFileName(file.name)
            setFileLabel(" Файл Выбран :  " +file.name)
            console.log(file.name)
        }
    };
    return (
        <div className="add-game-main">
            <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
                <h3 className="add-form-title">Update Game Form</h3>

                <div className="add-game-input">
                    <label >Choose Image : </label>
                    <input onChange={handleFileChange} type="file" />
                    <span className="span-file">{fileLabel}</span>
                </div>
                <div className="back-add-buttons">
                    <input className="back-btn" type="button" value="Back" onClick={onBackBtnHnd} />
                    <input className="add-btn" type="submit" value="Update Game" />
                </div>
            </form>
        </div>
    )
}
export default EditPhoto