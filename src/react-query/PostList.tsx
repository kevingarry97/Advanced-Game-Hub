import React, { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [userId, setUserId] = useState<number>();
  const { data, isLoading, fetchNextPage, error, isFetchingNextPage } =
    usePosts(userId, { pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value={""}></option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
        <option value={"6"}>6</option>
      </select>
      <div className="flex flex-col gap-y-2">
        {data?.pages?.map((page) => (
          <React.Fragment>
            {page.map((post, key) => (
              <div key={key} className="border px-4 py-2 rounded-lg">
                <h6>{post?.title}</h6>
                <small>{post?.body}</small>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        style={{ margin: 5 }}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading ..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
