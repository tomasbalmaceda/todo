import React from "react";

import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";

import * as C from "./App.styles";

const App = () => {
  return (
    <C.Container>
      <C.GlobalStyle />
      <C.Area>
        <C.Header>Todo</C.Header>
        <AddTask />
        <TaskList />
      </C.Area>
    </C.Container>
  );
};

export default App;
