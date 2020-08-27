import React from "react";
import ReactDOM from "react-dom";
import CurrentPool from "./CurrentPool";
import AddDie from "./Rolling/AddDie";
import AddRoll from "./Rolling/AddRoll";
import RollKeep from "./Rolling/RollKeep";
import RollResult from "./Rolling/RollResult";

const App = () => {
  return (
    <div>
      <div className="ui statistic">
        <div className="label">PoolLabelPlaceholder</div>
        <div className="value">
          <CurrentPool />
        </div>
      </div>
      <div className="ui button">
        <AddDie className="ui button" />
        <AddRoll className="ui button" />
        <RollKeep className="ui button" />
      </div>
      <div className="ui statistic">
        <div className="label">RollResultPlaceholder</div>
        <div className="value">
          <RollResult />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
