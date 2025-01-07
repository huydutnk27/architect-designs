import { useRef, useState } from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

const ImageUpload = ({ onSetImageData, onSetIndex }) => {
    const [image, setImage] = useState("");
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
            const fileName = files[0].name;
            var parts = fileName.split('.');
            const fileType = parts[parts.length - 1];

            // console.log('fileType', fileType);
            // setImage(files[0]);
            convetBase64(files[0]);
        }
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };

    // console.log("imageimage", image);
    return (
        <div>
            <input style={{display: 'none'}} type="file" accept=".jpg,.png,.jpeg" 
                    ref={inputFile} onChange={handleFileUpload}/>
            <TfiPencilAlt onClick={onButtonClick}/>
        </div>
        
    )
};

export default ImageUpload;