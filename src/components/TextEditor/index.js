import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './index.css';


function TextEditor({ value, onChange, name }) {

    return (
        <ReactQuill
            name={name}
            placeholder='Content'
            value={value}
            onChange={onChange}
            modules={TextEditor.modules}
            formats={TextEditor.formats}
        />
    );
}
TextEditor.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        // [{ size: [] }]
        // eslint-disable-next-line no-sequences
        ['bold', 'italic', 'underline', 'strike', 'blockquote']
        // eslint-disable-next-line no-sequences
        [{ list: 'ordered' }, { list: 'bullet' }],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],

        ['clean']

    ]
};

TextEditor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-blok'
];


export default TextEditor;
