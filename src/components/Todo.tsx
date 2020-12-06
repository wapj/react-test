import React, { useState } from "react";

interface ITodo {
  id: number;
  desc: String;
}

export default function Todo() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState("");
  const [showOdd, setShowOdd] = useState(false);
  function onAdd() {
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
    setDesc(""); // desc 값을 비워주자
  }
  function onDelete(e: React.BaseSyntheticEvent) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo: ITodo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}

  return (
    <div>
      <h3>할일 목록</h3>
      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true))
          .map((todo: ITodo) => (
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))}
      </ul>
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수아이템만보기</button>
      <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  );
}
