import React from "react";
// import { useGetAllCommentsQuery } from "../../features/FetchVideosApi";

function Subscriptions() {
  console.log(process.env.REACT_APP_API_KEY);
  // const { data, loading, error } = useGetAllCommentsQuery();
  // console.log(data);
  return (
    <div>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((comment) => {
          // return <h1>{comment.name}</h1>;
        })
      )} */}
    </div>
  );
}

export default Subscriptions;
