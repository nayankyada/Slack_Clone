import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Chat.css";
import StarBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./Firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((sanpshot) => setRoomDetails(sanpshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomMessages);
  return (
    <div className="chat">
      {/* <h2>You are in {roomId}</h2> */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>{roomDetails?.name}</strong>
            <StarBorderOutlineIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};
export default Chat;
