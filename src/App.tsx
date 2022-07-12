import React, { useContext, Fragment, useState } from "react";

import { ListItem } from "./components/ListItem";
import { AddTask } from "./components/AddTask";

import { Context } from "./contexts/Context";

import * as C from "./App.styles";

const App = () => {
  const { state } = useContext(Context);

  return (
    <C.Container>
      <C.GlobalStyle />
      <C.Area>
        <C.Header>Todo</C.Header>
        <AddTask />
        <C.MapContainer>
          {state.todo.todo.map((item, index) => (
            <Fragment key={index}>
              <ListItem item={item} />
            </Fragment>
          ))}
        </C.MapContainer>
      </C.Area>
    </C.Container>
  );
};

export default App;
