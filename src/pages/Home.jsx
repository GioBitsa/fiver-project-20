import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  Container,
  Typography,
  Stack,
  Box,
  Paper,
  TextField,
  Divider,
} from "@mui/material";
import HeroImg from "../assets/hero.png";
import ReviewServe from "../assets/reviewserve.png";
import SecondaryButton from "../components/Common/SecondaryButton/SecondaryButton";
import ComputerSvg from "../assets/computerSvg.png";
import Analytics from "../assets/analytics.png";
import Love from "../assets/love.png";
import Group from "../assets/group.png";
import { styled } from "@mui/system";

const MyTextField = styled(TextField)({
  width: "100%",

  "& .MuiInputBase-root": {
    color: "#0e2946",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0e2946",
  },

  "& .MuiFormLabel-root": {
    color: "#0e2946",
  },
});

const Home = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    manager: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    manager: false,
    phone: false,
    city: false,
  });

  const handleSubmit = () => {
    setErrors(null);
  };

  return (
    <>
      <Navbar />
      <div className="bg-layers">
        <div className="overlay" />
        <img className="mainImage" src={HeroImg} alt="hero" />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: "1", color: "white" }}
        >
          <Stack>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bolder" }}
            >
              Restaurants see 5-9% increase in revenue for one-star increase in
              their online platform rating
            </Typography>
            <Typography
              variant="p"
              component="h3"
              sx={{ fontWeight: "500", my: 3 }}
            >
              Reviews are driving your businesses today but the lack of
              understanding on how to do it effectively, in this highly
              competitive market, is a key challenge due to limited budget,
              resources and expertise!
            </Typography>
            <SecondaryButton text="tell me how" />
          </Stack>
        </Container>
      </div>
      <Box sx={{ backgroundColor: "rgb(242, 242, 243)" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ paddingTop: "100px" }} spacing={2}>
            <Stack justifyContent="space-between">
              <img
                src={ReviewServe}
                alt="reviewserve"
                className="reviewserve-img"
              />
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: "bolder", fontSize: "2.063rem", my: 2 }}
              >
                How ReviewServe can serve you?
              </Typography>
            </Stack>
            <Paper
              elevation={4}
              sx={{ width: "500px", padding: "30px 60px 60px" }}
            >
              <MyTextField
                error={errors.name}
                id="name"
                label="Restaurant Name"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                value={formValues.name}
                sx={{
                  marginTop: "30px",
                }}
              />
              <MyTextField
                error={errors.manager}
                id="manager"
                label="Restaurant Owner/Manager"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                value={formValues.name}
                sx={{
                  marginTop: "30px",
                }}
              />
              <MyTextField
                error={errors.phone}
                id="phone"
                label="Phone"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                value={formValues.name}
                sx={{
                  marginTop: "30px",
                }}
              />
              <MyTextField
                error={errors.city}
                id="city"
                label="City"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                value={formValues.name}
                sx={{
                  margin: "30px 0",
                }}
              />
              <SecondaryButton
                onClick={() => handleSubmit()}
                text="i'm interested"
              />
            </Paper>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ py: 4 }}>
            <Stack alignItems="center">
              <img src={ComputerSvg} alt="computer" width={50} />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", color: "#191818", my: 1 }}
              >
                Single Data Platform
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "rgb(89,89,89)", textAlign: "center" }}
              >
                One stop to access all reviews from multiple food delivery
                platforms
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img src={Analytics} alt="computer" width={50} />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", color: "#191818", my: 1 }}
              >
                Customer Intelligence
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "rgb(89,89,89)", textAlign: "center" }}
              >
                Get insights from customer reviews, and how it is impacting your
                revenue
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img src={Group} alt="computer" width={50} />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", color: "#191818", my: 1 }}
              >
                Edge over Competition
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "rgb(89,89,89)", textAlign: "center" }}
              >
                Not just customers, but understand your competitors better and
                position strategically
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img src={Love} alt="computer" width={50} />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", color: "#191818", my: 1 }}
              >
                Earn loyal Customers
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "rgb(89,89,89)", textAlign: "center" }}
              >
                Track your customers, who provide reviews, to serve them better
                and turn them into your loyal customers
              </Typography>
            </Stack>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={3} sx={{ padding: "50px 0px" }}>
            <Stack sx={{ width: "50%" }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: "bold", color: "#191818" }}
              >
                Have a look at ReviewServe
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "rgb(89,89,89)", fontSize: "18px", mt: 3, px: 3 }}
              >
                <strong>ReviewServe</strong> derives insights by analyzing
                customer reviews from multiple platforms, using advanced machine
                learning algorithms and coming up with recommendations that can
                help restaurants identify concern areas and propose an effective
                marketing strategy thus helping to improve customer
                relationships, satisfaction and turning them into loyal
                customers!
              </Typography>
            </Stack>
            <Box>
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?v=4pMrmd5Fp0o&list=TLGG4xYttdXDdKwxNTA4MjAyMg&ab_channel=Reviewserve"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              ></iframe> */}
              video here
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
