import React from "react";
import ListItems from "./ListItems";

const Content = ({places1, handleCheck, handleDelete}) => {
  return (
    <>
      {places1.length ? (
        <ListItems 
          places1={places1}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>The list is empty</p>
      )}
    </>
  );
};

export default Content;
