import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
    // 이 서정을 총해 문자열 맨 앞의 ?를 생략합니다.
  });
  const showDetail = query.detail === "true";
  // 쿼리의 파싱 결과 값은 문자열입니다.

  return (
    <div>
      <h1>About</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 에제 프로젝트입니다.</p>
      {showDetail && <p>detail 값이 true입니다.</p>}
    </div>
  );
};

export default About;
