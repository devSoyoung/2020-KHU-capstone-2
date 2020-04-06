import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

interface HeaderProps {
  editMode: boolean;
  login: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({ login, editMode }) => {
  return (
    <header>
      <span className="header-title">
        <Link to="/">Web Image Editor</Link>
      </span>
      {login && getEditorButton(editMode)}
    </header>
  );
};

function getEditorButton(editMode: boolean) {
  if (editMode) {
    return (
      <>
        <button className="header-btn">저장하기</button>
        <button className="header-btn">다운로드</button>
      </>
    )
  }

  return (
    <>
      <button className="header-btn" onClick={async () => {
        // @ts-ignore
        const result = await editorInstance.loadImageFromURL("https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg", "sample");
        console.log("Image Load Result: ", result);
      }}>URL로 가져오기</button>
      <button className="header-btn">파일 가져오기</button>
    </>
  );
}

export default Header;
