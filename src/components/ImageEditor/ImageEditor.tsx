import React, { useRef, useEffect } from "react";
import ToastEditor from "tui-image-editor";
import { blackTheme } from "../../options/theme";
import { locale_ko_KR } from "../../options/locale";

import "tui-image-editor/dist/tui-image-editor.min.css";

const ImageEditor = () => {
  const imageEditor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // @ts-ignore
    new ToastEditor(imageEditor.current, {
      includeUI: {
        loadImage: {
          path: 'img/sampleImage.jpg',
          name: 'SampleImage'
        },
        locale: locale_ko_KR,
        theme: blackTheme, // or whiteTheme
        initMenu: 'filter',
        menuBarPosition: 'bottom'
      },
      cssMaxWidth: 700,
      cssMaxHeight: 1000,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      }
    });
  }, []);

  return (
    <div id="imageEditor" ref={imageEditor} />
  );
};

export default ImageEditor;
