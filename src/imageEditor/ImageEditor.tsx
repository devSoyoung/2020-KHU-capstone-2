import React, { useEffect, useRef } from "react";
import ToastEditor from "tui-image-editor";

import { useInput } from "../hooks";
import EditorOptions from "./editorOptions";
import { urlUpload, fileUpload } from "./apis/upload";

import "./ImageEditor.css";

let editor: ToastEditor;

function ImageEditor() {
  const imageEditorRef = useRef<HTMLDivElement>(null);
  const imageUrl = useInput("");

  useEffect(() => {
    // @ts-ignore
    editor = new ToastEditor(imageEditorRef.current, EditorOptions);
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

    </div>
  )
}

export default ImageEditor;