import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatInput.css";
import db from "./Firebase";
import { userValue } from "./Context";
import firebase from "firebase";
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const { user, login } = userValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      });
    }
    setInput("");
  };
  return (
    <div class="chatInput">
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
};
export default ChatInput;
