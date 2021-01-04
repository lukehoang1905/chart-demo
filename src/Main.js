import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Facebook,
  Gif,
} from "@material-ui/icons";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import DemoChart from "./DemoChart";
import "./Main.css";
import PublicNavbar from "./PublicNavbar/PublicNavbar";

const Main = ({ data, chart }) => {
  return (
    <div className="main">
      <PublicNavbar />
      <div className="main-messages">
        <DemoChart data={data} chart={chart} />
        <Facebook></Facebook>
      </div>
      <div className="main-input">
        <AddCircle fontSize="large" />

        <form>
          <input placeholder={`test`} />
          <button className="main-inputButton" type="submit">
            Send
          </button>
        </form>
        <div className="main-inputIcons">
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  );
};

export default Main;
