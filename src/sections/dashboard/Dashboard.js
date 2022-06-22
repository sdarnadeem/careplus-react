import React from "react";

import Grid from "@mui/material/Grid";

import LeftSide from "../../components/LeftSide";
import MiddleSide from "../../components/MiddleSide";
import RightSide from "../../components/RightSide";

import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container padding={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {!matches && (
          <Grid item lg={2} md={3} sm={2} xs={3}>
            <LeftSide />
          </Grid>
        )}
        <Grid item lg={7} md={9} sm={10} xs={9}>
          <MiddleSide />
        </Grid>
        <Grid item lg={3}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
