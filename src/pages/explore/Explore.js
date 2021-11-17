import React from "react";
import { useGetAllVideosQuery } from "../../features/FetchVideosApi";
function Explore() {
  const { data, isLoading, error } = useGetAllVideosQuery();
  console.log(data);
  return (
    <div>
      <h1>Explore</h1>
    </div>
  );
}

export default Explore;
