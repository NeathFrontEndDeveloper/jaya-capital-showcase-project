"use client";

import Chart from "./content/chart";

const Dashboard = () => {
  // const TotalProjectApi = "Total Project";
  // const TotalProjectNumber = "30";

  return (
    <>
      {/* <====== note use .map() when fetch with real api not write it like this this is just a Demo Project data ======> */}

      {/* card row  */}
      {/* <div className="w-full grid grid-cols-4 space-x-6">
        <div className="border border-gray-300 p-4 rounded-lg bg-white">
          <h1>{TotalProjectApi}</h1>
          <span>{TotalProjectNumber}</span>
        </div>
      </div> */}

      {/* Display as Chart style */}
      <div>
        <Chart />
      </div>
    </>
  );
};

export default Dashboard;
