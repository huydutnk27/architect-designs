import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';

const TextEditor = ({ editorStateData, onSetTextEditor }) => {
    const blocksFromHtml = htmlToDraft(editorStateData);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        // editorStateData = convertToRaw(editorState.getCurrentContent());
        onSetTextEditor(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    useEffect(() => {
        // let html = convertToHTML(editorState.getCurrentContent());
        // setConvertedContent(html);
    }, [editorState]);

    return (
        <div>
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
};

export default TextEditor;