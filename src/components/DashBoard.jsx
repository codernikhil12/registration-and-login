import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchData } from "../Api/ApiHandler";

const DashBoard = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: FetchData,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data.user);

  return (
    <>
      <h1>Dashboard</h1>
      {data.user.map((user) => (

        <li key="id">{user.name}</li>
      ))}
    </>
  );
};

export default DashBoard;
