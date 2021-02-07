import React from "react";
import { useHistory } from "react-router";
import db from "./Firebase";
import "./SidebarOption.css";
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <span className="sidebarOption_hash"># {title}</span>
      )}
    </div>
  );
};
export default SidebarOption;
