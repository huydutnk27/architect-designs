import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "./drag-drop.css";

const DragNdrop = ({ onFilesSelected, onSetImageData, width, height }) => {
    const initalData: File[] = [];
    const [files, setFiles] = useState<File[]>(initalData);
    const [base64Data, setBase64Data] = useState('');

    const convetBase64 = (file: File) => {
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);
        console.log(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            setBase64Data(reader.result as string);
            onSetImageData(reader.result as string);
        };
    };

    // Handle file change
    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles: File[] = Array.from(selectedFiles);
            // const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles: File[]) => [...prevFiles, ...newFiles]);
            // Call fuction to convert file to base64
            convetBase64(selectedFiles[0]);
        }
    };

    // Handle drop file
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles: File[] = Array.from(droppedFiles);
            // const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles: File[]) => [...prevFiles, ...newFiles]);
            // Call fuction to convert file to base64
            convetBase64(droppedFiles[0]);
        }
    };

    // Handle remove file
    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        onSetImageData(null);
    };

    useEffect(() => {
        onFilesSelected(files);
    }, [files, onFilesSelected]);

    return (
        <section className="drag-drop" style={{ width: width, height: height }}>
            <div className={`document-uploader ${
                files.length > 0 ? "upload-box active" : "upload-box"}`}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <>
                    <div className="upload-info">
                        <AiOutlineCloudUpload />
                        <div>
                            <p>Drag and drop your files here</p>
                            <p>
                                Limit 5MB per file. Supported files: .JPG, .PNJ, .JPEG
                            </p>
                        </div>
                    </div>
                    <input
                        type="file"
                        hidden
                        id="browse"
                        onChange={handleFileChange}
                        accept=".jpg,.png,.jpeg"
                        multiple
                    />
                    <label htmlFor="browse" className="browse-btn">
                        Browse files
                    </label>
                </>

                {files.length > 0 && (
                    <div className="file-list">
                        <div className="file-list__container">
                            {files.map((file, index) => (
                                <div className="file-item" key={index}>
                                    <div className="file-info">
                                        <p>{file.name}</p>
                                        {/* <p>{file.type}</p> */}
                                    </div>
                                    <div className="file-actions">
                                        <MdClear onClick={() => handleRemoveFile(index)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {files.length > 0 && (
                    <div className="success-file">
                        <AiOutlineCheckCircle style={{ color: "#6DC24B", marginRight: 1 }} />
                        <p>{files.length} file(s) selected</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DragNdrop;
