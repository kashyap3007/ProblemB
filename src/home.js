import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  let query = useQuery();
  const data = query.get("iframe_url");
  //   console.log(data);
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#67b5a3",
          width: "80%",
          textAlign: "center",
          margin: "10px auto",
          padding: "10px 10px",
          borderRadius: "20px",
        }}
      >
        <h2> Your Website Url </h2>
        <a className="text-dark" href={data}>
          {data}
        </a>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" src={data}></iframe>
        </div>
      </div>
    </>
  );
}

export default Home;
