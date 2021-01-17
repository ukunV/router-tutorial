import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// Switch: 여러 Route를 감싸서 그 중 일치하는 단 하나의 Route마을 렌더링 시켜 준다.
//         Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 NOT FOUND 페이지도 구현할 수 있다.
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={["/about", "/info"]} component={About} />{" "}
        {/* /about과 /info에서 모두 같은 페이지를 보여준다. */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
