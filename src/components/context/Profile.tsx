import Greeting from "./Greeting";

export default function Profile({ username }: { username: string }) {
  return (
    <div>
      <Greeting username={username} />
    </div>
  );
}
