import React, { useEffect, useRef, useState } from "react";
import ToastEditor from "tui-image-editor";

import "./ImageEditor.css";

let editor: ToastEditor | null = null;

function ImageEditor() {
  const imageEditorRef = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // @ts-ignore
    editor = new ToastEditor(imageEditorRef.current, {
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      }
    });
  }, []);

  const fileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const [file]: File[] = Array.from(e.target.files);
    if (!editor) return;
    try {
      await editor.loadImageFromFile(file);
      editor.clearUndoStack();
    } catch (err) {
      console.log("이미지 업로드 실패: ", err);
    }
  };

  const urlUpload = async () => {
    try {
      console.log("imageUrl: ", imageUrl);
      await editor?.loadImageFromURL(imageUrl, "Test-Image");
      editor?.clearUndoStack();
    } catch (err) {
      console.log("이미지 업로드 실패: ", err);
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-image-uploader">
        <h3>이미지 파일 가져오기</h3>
        <input type="file" accept="image/*" id="input-image-file" onChange={fileUpload} />
        <div className="editor-image-url-uploader">
          <input type="text" id="input-image-url" onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
          <button onClick={urlUpload}>가져오기</button>
        </div>
      </div>
      <div className="editor-content" ref={imageEditorRef} />

    </div>
  )
}

export default ImageEditor;