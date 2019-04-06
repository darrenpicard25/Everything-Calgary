import React, { Component } from "react";
require("../styles/main.scss");
import SideNav from "./SideNav.jsx";
import Middle from "./Middle.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Calgary_Middle from "./Calgary_Middle.jsx";
import Calgary_SideNav from "./Calgary_SideNav.jsx";

/*
This is the main structure container all sections will be imported here
--------------------------------------------------------------------------
*/

class Main extends Component {
  render() {

    const chooseStatistics = e => {
      this.props.changeTopic(e.target.id)
    }

    if (this.props.jumbotron) {
      return (
        <React.Fragment>
          <Jumbotron updateCommunity={this.props.updateCommunity} />
        </React.Fragment>
      );
    } else if (this.props.calgary === true) {
      <React.Fragment>
        <Calgary_Middle/>
        <Calgary_SideNav/>
      </React.Fragment>
    } else {
      return (
        <div className="row">
          <Calgary_SideNav topic={this.props.topic} chooseStatistics={chooseStatistics} community={this.props.data.community}/>
          <Calgary_Middle
            data={this.props.data}
            changeTopic={this.props.changeTopic}
            updateCommunity={this.props.updateCommunity}
          />
        </div>
      );
    }
  }
}

export default Main;
