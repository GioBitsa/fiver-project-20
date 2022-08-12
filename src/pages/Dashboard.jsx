import React from "react";
import { Grid } from "@mui/material";
import PageLayout from "../components/PageLayout/PageLayout";
import RatingsComponent from "../components/RatingsComponent/RatingsComponent";
import EngagementComponent from "../components/EngagementComponent/EngagementComponent";
import ProgressChart from "../components/ProgressChart/ProgressChart";
import BubbleChart from "../components/BubbleChart/BubbleChart";

const Dashboard = () => {
  return <PageLayout>
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <RatingsComponent />
      </Grid>
      <Grid item xs={12} md={6}>
        <EngagementComponent />
      </Grid>
      <Grid item xs={12} md={6}>
        <BubbleChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ProgressChart />
      </Grid>
    </Grid>
  </PageLayout>;
};

export default Dashboard;
