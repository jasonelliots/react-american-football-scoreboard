import React from "react";
import "./App.css";

const Buttons = (props) => {
  const {
    quarterCounter,
    setAwayScore,
    setHomeScore,
    homeScore,
    awayScore,
  } = props;

  const homeFieldgoal = (event) => {
    setHomeScore(homeScore + 3);
  };
  const homeTouchdown = (event) => {
    setHomeScore(homeScore + 7);
  };
  const awayFieldgoal = (event) => {
    setAwayScore(awayScore + 3);
  };
  const awayTouchdown = (event) => {
    setAwayScore(awayScore + 7);
  };

  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={homeTouchdown}>
          Home Touchdown
        </button>
        <button className="homeButtons__fieldGoal" onClick={homeFieldgoal}>
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={awayTouchdown}>
          Away Touchdown
        </button>
        <button className="awayButtons__fieldGoal" onClick={awayFieldgoal}>
          Away Field Goal
        </button>
      </div>
      <button onClick={quarterCounter}> Next Quarter</button>
    </section>
  );
};

export default Buttons;
