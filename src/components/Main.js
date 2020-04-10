import React from "react";
import { Switch, Route } from "react-router-dom";

import Work from "../pages/Work";
import About from "../pages/About";
import FBUCodepath from "../pages/FBUCodepath";
import InfoPost from "../pages/InfoPost";
import Miscellaneous from "../pages/Misc";
import DesignCommunity from "../pages/DesignCommunity";
import StudyBuddy from "../pages/StudyBuddy";
import Frontiers from '../pages/Frontiers';
import parts from "../pages/parts";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={parts} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route path = "/frontiers" component={Frontiers} />
          <Route path="/fbu" component={FBUCodepath} />
          <Route path="/infopost" component={InfoPost} />
          <Route path="/studybuddy" component={StudyBuddy} />
          <Route path="/miscellaneous" component={Miscellaneous} />
          <Route path="/designCommunity" component={DesignCommunity} />
        </Switch>
      </main>
    );
  }
}

export default Main;
