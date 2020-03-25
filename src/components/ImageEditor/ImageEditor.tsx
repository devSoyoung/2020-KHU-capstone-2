import React from "react";
// @ts-ignore
import ToastEditor from "@toast-ui/react-image-editor";
import { locale_ko_KR } from "../../options/locale";
import { blackTheme } from "../../options/theme";

import "tui-image-editor/dist/tui-image-editor.css";

const ImageEditor = () => {
  return (
    <ToastEditor
      includeUI={{
        loadImage: {
          path: 'img/sampleImage.jpg',
          name: 'SampleImage'
        },
        locale: locale_ko_KR,
        theme: blackTheme, // or whiteTheme
        initMenu: 'filter',
        menuBarPosition: 'bottom'
      }}
      cssMaxWidth={700}
      cssMaxHeight={1000}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70
      }}
    />
  )
};

export default ImageEditor;
