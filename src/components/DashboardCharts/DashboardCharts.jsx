import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { usersArray } from "../../data";

const DashboardCharts = () => {
  const [imagesContent, setImagesContent] = useState(null);

  useEffect(() => {
    usersArray?.map((item) => {
      if (localStorage.getItem("username") === item.username) {
        return setImagesContent(item);
      }
      return null;
    });
  }, []);

  return (
    <Grid container>
      {imagesContent !== null &&
        imagesContent.content.charts?.map((item) => (
          <Grid key={item.id} item xs={12}>
            <img src={item.src} alt="chart" width="100%" />
          </Grid>
        ))}
    </Grid>
  );
};

export default DashboardCharts;
