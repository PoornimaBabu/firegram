import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadImage = () => {
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
       const selectedImage = event.target.files[0];
        console.log("type is:" + selectedImage.type);
        if (selectedImage && types.includes(selectedImage.type)){
            setFile(selectedImage);
            setError(null);
        } else{
            setFile(null);
           setError("Please select valid image type");
        }
    }

    return (
        <form>
       
        <label>
        <input type="file" onChange={handleChange}/>
        <span>+</span>
        </label>
        
        <div className="output">
        { error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        
        </form>
    )
}

export default UploadImage;