import React from "react";
import { Route, NavLink } from "react-router-dom";
// NavLink: NavLink는 Link와 비슷하다.
// 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은
// CSS 클래스를 적용할 수 있는 컴포넌트이다.
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h3>사용자 목룍: </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/ukunv">
            ukunV
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact // = exact={true}
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
