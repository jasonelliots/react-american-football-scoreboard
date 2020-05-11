//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [quarter, addQuarter] = useState(1);

  const quarterCounter = (event) => {
    if (quarter <= 3) {
      addQuarter(quarter + 1);
    }
  };

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
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <Buttons
        quarterCounter={quarterCounter}
        homeScore={homeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        setHomeScore={setHomeScore}
      />
    </div>
  );
}

export default App;
