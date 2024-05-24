import React, { useState } from "react";
import useTodos from "../react-query/hooks/useTodos";

const TodoList = () => {
  const pageSize = 10;
  const { data, isLoading, error } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  console.log('Data ', data)
  return (
    <>
      <div className="flex flex-col gap-y-2">
          {data?.map((post, key) => (
            <div key={key} className="border px-4 py-2 rounded-lg">
              <h6>{post?.title}</h6>
              {/* <small>{post?.body}</small> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
