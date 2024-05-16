import React,{onClick, lazy, Suspense} from "react";
import useFetchData from "@hooks/useFetchData.jsx";

import { BASE_URL } from "@utils/constants.js";
// Renders the chart display
const ChartDisplay = lazy(() => import("@components/Charts.jsx"));
//Rendser home page with chart display
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