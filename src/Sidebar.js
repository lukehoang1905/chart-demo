import React from "react";
import "./Sidebar.css";

import { ExpandMore, Add } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const SideBar = ({ handleChangeChart }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h1>Chart Types</h1>
        <ExpandMore />
      </div>

      <div className="sidebar-channelsHeader">
        <div className="sidebar-header">
          <h4> Choose your chart type</h4>
        </div>

        <Add className="sidebar-addChannel" />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channelsList d-flex flex-column">
          <Button onClick={() => handleChangeChart("Pie")}>Pie Chart</Button>
          <Button onClick={() => handleChangeChart("Line")}>Line Chart</Button>
          <Button onClick={() => handleChangeChart("Bar")}>Bar Chart</Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
