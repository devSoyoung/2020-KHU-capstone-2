import React, { useState } from "react";
import ToastEditor from "tui-image-editor";

import "./EditorTool.scss";

interface EditToolsProps {
  editor: ToastEditor,
  // 이미지 로딩되었을 때만 도구 활성화되도록
  disabled: boolean
}

enum Tool {
  CROP,
  ROTATE,
  DRAW,
  SHAPE,
  ICON,
  TEXT,
  MASK,
  FILTER
}

const ICON_SIZE = "fa-2x";

function EditTools({ editor, disabled }: EditToolsProps) {
  const [focus, setFocus]: [Tool | null, Function] = useState(null);
  const handleClick = (event: Tool) => {
    setFocus(event);    // 아이콘 색상 설정

    if (event === Tool.CROP) {
      return handleCrop();
    }
  };

  const handleCrop = () => {
    editor.startDrawingMode('CROPPER');
  };

  return (
    <div className={`editor-tool-container${disabled ? " disabled" : ""}`}>
      <i className={getIconName("fas fa-crop-alt", focus === Tool.CROP)}
         onClick={() => handleClick(Tool.CROP)} />
      <i className={getIconName("fas fa-sync-alt", focus === Tool.ROTATE)}
         onClick={() => handleClick(Tool.ROTATE)} />
      <i className={getIconName("fas fa-pen", focus === Tool.DRAW)}
         onClick={() => handleClick(Tool.DRAW)} />
      <i className={getIconName("fas fa-shapes", focus === Tool.SHAPE)}
         onClick={() => handleClick(Tool.SHAPE)} />
      <i className={getIconName("fas fa-star", focus === Tool.ICON)}
         onClick={() => handleClick(Tool.ICON)} />
      <i className={getIconName("fas fa-font", focus === Tool.TEXT)}
         onClick={() => handleClick(Tool.TEXT)} />
      <i className={getIconName("fas fa-mask", focus === Tool.MASK)}
         onClick={() => handleClick(Tool.MASK)} />
      <i className={getIconName("fas fa-sliders-h", focus === Tool.FILTER)}
         onClick={() => handleClick(Tool.FILTER)}/>
    </div>
  )
}

const getIconName = (icon: string, focus: boolean): string => {
  return `${icon} ${ICON_SIZE}${focus ? " focus" : ""}`;
};

export default EditTools;