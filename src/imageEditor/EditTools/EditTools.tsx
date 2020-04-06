import React from "react";
import ToastEditor from "tui-image-editor";

import "./EditorTool.css";

interface EditToolsProps {
  editor: ToastEditor
}

function EditTools({ editor }: EditToolsProps) {
  const handleCrop = () => {
    console.log("editor: ", editor);
    editor.startDrawingMode('CROPPER');
  };

  return (
    <div className="editor-tool-container">
      기능목록
      <button onClick={handleCrop}>자르기</button>
    </div>
  )
}

export default EditTools;