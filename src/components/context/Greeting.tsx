import React from "react";

export default function Greeting({ username }: { username: string }) {
  return <p>{`${username} 님 안녕하세요~`}</p>;
}
