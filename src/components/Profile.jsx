import { useNavigate } from "react-router-dom";

import { fetchMessageById } from "../api/Posts";

import { useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";

export default function Profile({ user }) {
  //   const { token } = useAuth();

  //   const { postId } = useParams();

  //   const [message, setMessage] = useState({});

  //   useEffect(() => {
  //     async function getMessageById() {
  //       const msgData = await fetchMessageById(postId);
  //       setMessage(msgData);
  //     }
  //     getMessageById();
  //   }, []);
  console.log(user);
  return (
    <div>
      <h3>Messages</h3>
      {user?.messages?.map((message) => {
        console.log(message);
        return (
          <>
            <div>Sent by: {message.fromUser.username}</div>
            <div>{message.content}</div>
          </>
        );
      })}
    </div>
  );
}
