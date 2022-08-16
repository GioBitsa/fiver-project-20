import React from "react";
import { Grid } from "@mui/material";
import Chart1 from "../../assets/chart1.jpg";
import Chart2 from "../../assets/chart2.jpg";
import Chart3 from "../../assets/chart3.jpg";
import Chart4 from "../../assets/chart4.jpg";

const DashboardCharts = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <img src={Chart1} alt="chart" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Chart2} alt="chart" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Chart3} alt="chart" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Chart4} alt="chart" width="100%" />
      </Grid>
    </Grid>
  );
};

export default DashboardCharts;
