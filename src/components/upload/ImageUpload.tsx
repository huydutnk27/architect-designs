import { useRef, useState } from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

const ImageUpload = ({ onSetImageData, setIndex, name }) => {
    // const [image, setImage] = useState("");
    const inputFile = useRef(null);

    const convetBase64 = (file: File) => {
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // console.log(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            // setBase64Data(reader.result as string);
            onSetImageData(reader.result as string);
        };
    };

    const handleFileUpload = (e) => {
        const files = e.target.files;
        if (files && files.length) {
            convetBase64(files[0]);
        }
        setIndex(e.target.name);
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };

    // console.log("imageimage", image);
    return (
        <div>
            <input style={{display: 'none'}} type="file" accept=".jpg,.png,.jpeg" 
                    ref={inputFile} onChange={handleFileUpload} name={name}/>
            <TfiPencilAlt onClick={onButtonClick}/>
        </div>
        
    )
};

export default ImageUpload;