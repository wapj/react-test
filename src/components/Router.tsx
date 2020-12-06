import { BrowserRouter, Link, Route } from "react-router-dom";
import GoodButton from "./GoodButton";
import Rooms from "./Rooms";
import Todo from "./Todo";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solild gray" }}>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/photo">사진</Link>
          </li>
          <li>
            <Link to="/rooms">방소개</Link>
          </li>
          <li>
            <Link to="/todo">투두앱</Link>
          </li>
          <li>
            <Link to="/goodButton">조아요 버튼</Link>
          </li>
        </ul>

        <br />
        <Route path="/todo" component={Todo} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/goodButton" component={GoodButton} />
      </div>
    </BrowserRouter>
  );
}
