import React from "react";
import { RouteComponentProps } from "react-router";
import { Link, Route } from "react-router-dom";

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

export default function Rooms({ match }: MatchProps) {
  return (
    <div>
      <h2>방소개 페이지</h2>
      <Link to={`${match.url}/blueRoom`}>파란방</Link> <br />
      <Link to={`${match.url}/greenRoom`}>초록방</Link>
      <Route path={`${match.url}/:id`} component={Room} />
      <Route exact path={match.url} render={() => <h3>방을 선택해주세요</h3>} />
    </div>
  );
}

function Room({ match }: MatchProps) {
  return <h2>{`${match.params.id}방을 선택하셨습니다.`}</h2>;
}
