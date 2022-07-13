import React, { useContext, Fragment } from "react";

import * as C from "./styles";

import { ListItem } from "../ListItem";

import { Context } from "../../contexts/Context";

export const TaskList = () => {
  const { state } = useContext(Context);

  return (
    <C.MapContainer>
      {state.todo.todo.map((item, index) => (
        <Fragment key={index}>
          <ListItem item={item} />
        </Fragment>
      ))}
    </C.MapContainer>
  );
};
