import React from "react";

import Grid from "@mui/material/Grid";

import LeftSide from "../../components/LeftSide";
import MiddleSide from "../../components/MiddleSide";

const Dashboard = () => {
  return (
    <>
      <div
        style={{ width: "100%", height: "70px", outline: "1px solid green" }}
      >
        Navbar
      </div>
      <Grid container spacing={5} padding={3}>
        <Grid item xs={2}>
          <LeftSide />
        </Grid>
        <Grid item xs={10}>
          <MiddleSide />
        </Grid>
        {/* <Grid item xs={4}>
          <RightSide />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Dashboard;
