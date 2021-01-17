import React from "react";
import { withRouter } from "react-router-dom";
// withRouter: withRouter 함수는 HoC(Higher-order Component)이다.
//             Route가 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해준다.

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
