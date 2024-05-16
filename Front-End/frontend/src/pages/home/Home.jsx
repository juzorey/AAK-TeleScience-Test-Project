import React,{onClick} from "react";
import useFetchData from "@hooks/useFetchData.jsx";
import ChartDisplay from "@components/Charts.jsx";
import { BASE_URL } from "@utils/constants.js";

// Renders the chart display
const Home = () => {

  const {loading, error } = useFetchData(BASE_URL);

  if (loading) {return <div>Page Loading...</div>;}
  if (error) {return <div>Error Please Try Again</div>;}

  return (
    <>
      <ChartDisplay/>

    </>
  );
}
export default Home;