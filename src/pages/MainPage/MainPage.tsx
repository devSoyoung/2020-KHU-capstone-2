import React from "react";
import { Link } from "react-router-dom";

// 로그인 했을 때: 작업 목록 및 새 작업 생성 페이지
// 로그인 하지 않았을 때: 회원가입/로그인 페이지
const login:boolean = true;
function MainPage() {
  return (
    <div className="App">
      {login ? (
        <>
          <div>
            <h2>내 작업 목록</h2>
            <ul>
              <li>작업 1</li>
              <li>작업 2</li>
              <li>작업 3</li>
            </ul>
          </div>
          <div>
            <Link to="/editor">새 작업 만들기</Link>
          </div>
        </>
      ) : (
        <>
          <div>로그인 후 사용하면 작업 내용을 온라인에서 저장하고 불러올 수 있습니다.</div>
          <Link to="/editor">새 작업 만들기</Link>
        </>
      )}
    </div>
  );
}

export default MainPage;