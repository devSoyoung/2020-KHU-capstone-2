import React, { useEffect, useRef, useState } from "react";
import ToastEditor from "tui-image-editor";

import EditTools from "./EditTools";

import { useInput } from "../hooks";
import EditorOptions from "./editorOptions";
import { urlUpload, fileUpload } from "./apis/upload";

import "./ImageEditor.css";

// @ts-ignore
const initialEditor:ToastEditor = new ToastEditor(document.querySelector("#hidden-editor"), EditorOptions);

function ImageEditor() {
  const imageEditorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState(initialEditor);
  const imageUrl = useInput("");

  // DOM 에 Element 생성된 후에 imageEditor 재설정
  useEffect(() => {
    // @ts-ignore
    setEditor(new ToastEditor(imageEditorRef.current, EditorOptions));
  }, []);

  useEffect(() => {
    const timerid = setTimeout(() => {
      console.log("setTimeout called");
    }, 1000);

    return () => {
      clearTimeout(timerid);
    }
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-image-uploader">
        <h3>이미지 파일 가져오기</h3>
        <input type="file" accept="image/*" id="input-image-file" onChange={e => e.target.files && fileUpload(editor, e.target.files)} />
        <div className="editor-image-url-uploader">
          <input type="text" id="input-image-url" onChange={e => imageUrl.onChange(e.target.value)} value={imageUrl.value} />
          <button onClick={() => urlUpload(editor, imageUrl.value)}>가져오기</button>
        </div>
      </div>
      <div className="editor-content" ref={imageEditorRef} />
      <EditTools editor={editor} disabled={false} />
    </div>
  )
}

export default ImageEditor;