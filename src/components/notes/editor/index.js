import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

function Editor(props) {
    const [currentContent, setCurrentContent] = useState('');
    const [time, setTime] = useState(null);

    const updateNote = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        props.updateNote(props.note, {'title': title, 'body': content})
    } 
    const handleChange = (content, delta, source) => {
        clearTimeout(time);
        if(source == 'user'){
            setCurrentContent(content); 
            setTime(setTimeout(() => updateNote(content), 2000))
        }

    }
    useEffect(() => {
        setCurrentContent(props.note.body)
    }, [props.note])

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean'],
        ]
    }

    return (
        <>
            <ReactQuill value={currentContent} modules={modules} onChange={handleChange} />
        </>
    )
}

export default Editor;