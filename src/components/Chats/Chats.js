import React from "react";
import Chat from "../Chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="McConn"
        message="Hey there!"
        timestamp="5 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/3/3b/Matthew_McConaughey_2011.jpg"
      />

      <Chat
        name="Clooney"
        message="How's it going?"
        timestamp="3 hours ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/9/92/George_Clooney-4_The_Men_Who_Stare_at_Goats_TIFF09_%28cropped%29.jpg"
      />

      <Chat
        name="Cooper"
        message="Como estas"
        timestamp="19 hours ago"
        profilePic=""
      />

      <Chat
        name="Gosling"
        message="Hey you!"
        timestamp="2 days ago"
        profilePic="https://tce-live2.s3.amazonaws.com/media/media/f2635e78-87a3-4635-bc6b-2fa67f2b5521.jpg"
      />
    </div>
  );
};

export default Chats;
