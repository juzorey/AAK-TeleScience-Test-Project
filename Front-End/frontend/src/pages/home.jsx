import React from "react";
import Api from "../services/api.jsx";
import Stacked from "../components/Chart.jsx";
const Home = () => {

  return (
    <>
      <h1>Home</h1>
      <Api/>  
      <Stacked/>
    </>
  );
}
export default Home;