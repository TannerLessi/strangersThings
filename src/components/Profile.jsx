import useAuth from "../hooks/useAuth";

import { useState, useEffect } from "react";

export default function Profile() {
  const { user, token } = useAuth();

  console.log(user?.messages);
  return (
    <div>
      <h3>Messages</h3>
      {user?.messages?.map((message) => {
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
