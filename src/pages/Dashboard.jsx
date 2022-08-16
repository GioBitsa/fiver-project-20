import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
// import { Grid } from "@mui/material";
// import RatingsComponent from "../components/RatingsComponent/RatingsComponent";
// import EngagementComponent from "../components/EngagementComponent/EngagementComponent";
// import ProgressChart from "../components/ProgressChart/ProgressChart";
// import BubbleChart from "../components/BubbleChart/BubbleChart";
import DashboardCharts from "../components/DashboardCharts/DashboardCharts";

const Dashboard = () => {
  return (
    <PageLayout>
      {/* <Grid container spacing={5}>
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
    </Grid> */}
      <DashboardCharts />
    </PageLayout>
  );
};

export default Dashboard;
