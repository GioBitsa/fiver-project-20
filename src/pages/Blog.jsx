import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Typography, Box, Divider } from "@mui/material";
import RestaurantImg from "../assets/restaurant.png";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box>
          <Typography component="h2" variant="h5">
            Reviewserve: restaurant analytics service for restaurant managers
          </Typography>
          <Typography component="h6" variant="body1" sx={{ my: 2 }}>
            We are building a data driven solution for restauarants to improve
            their online brand , cut cost and improve profits.
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography
              component="h6"
              variant="body2"
              sx={{ fontWeight: "600" }}
            >
              Problem:
            </Typography>
            <Typography component="p" variant="p">
              a one-star increase in Yelp rating leads to a 5-9 percent increase
              in revenue. It is crucial for restaurants to improve their online
              presence brand and rating. The problem is that restaurants dont
              know how to go about doing it effectively , given their budget,
              their current position, their target market etc. <br />{" "}
              Reviewserve comes in with data driven customer insights and
              recommendations that help restaurants to identify their weak
              spots, do effective marketing, identify effective action items ,
              improve customer relationship and customer satisfaction
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h6"
              variant="body2"
              sx={{ fontWeight: "600" }}
            >
              What are we giving:
            </Typography>
            <Typography component="p" variant="p">
              If you are a restaurant operating in a tier1 city in india, bulk
              of your business is driven through online orders. people rely on
              online reviews and ratings on platforms like google reviews ,
              zomato, swiggy, mouth shut etc. <br /> Reviewserve provides a
              <strong>single portal</strong> for restaurant managers to look at
              customer feedback, comments and ratings. <br /> The restaurant
              manager would like to know when his rating goes down , what are
              the major complaints, how his competitors are doing. <br />{" "}
              Reviewserve provides these <strong>competitor insights,</strong>{" "}
              and where your restaurant can improve which will help in improving
              their rating.
              <br />
              When a customer leaves a feedback, the restaurant manager would
              like to know more about the customer to respond effectively. We
              give the likes/dislikes , past comment history of a particular
              customer which provides <strong>more customer info</strong> to
              restaurant managers <br />
              Every restaurant operates in a certain theme and would like to
              market it within their budget. There are several kinds of
              marketing channels. we provide <strong>recommendations</strong> to
              restaurants based on their current standing, budget , the theme
              etc so they get better ROI on their investments.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 5 }} />
        <Box>
          <Typography component="h2" variant="h5">
            Lan Thai : Restaurant review
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography component="p" variant="p" sx={{ my: 2 }}>
              Lan Thai, an indeed great food joint serving some authentic Thai
              Cuisine located in new BEL road bangalore. The place was started
              to serve some home away food to students of nearby colleges. Later
              on it became popular, because of quality and consistency <br />
              The menu is simple and no-nonsense! Trust me, one can easily
              understand the menu if you have basic idea about Asian Food. I
              wasn’t so keen on Soup, so ordered Tom Yum Salad (Papaya) – It was
              crunchy, spicy (hot), sweet and sour. It tastes exactly like how
              it is supposed to be.. Full Marks to the dish. Next one I ordered
              was Thai Basil Mushroom – Oh boy, it was so good. They have high
              quality mushrooms sautéed with some magic spices and basil. None
              of the flavors were overpowering, it was just perfect. They will
              serve with cup of white rice.
            </Typography>
            <img
              src={RestaurantImg}
              alt="restaurant"
              style={{ maxWidth: "600px", width: "100%" }}
            />
            <Typography component="p" variant="p" sx={{ my: 2 }}>
              Anna at Lan Thai was a great host and took care of us very well.
              The service was quick and staffs were polite.
            </Typography>
            <Typography component="p" variant="p" sx={{ my: 2 }}>
              Cost for 2: 600 INR
            </Typography>
            <Typography component="p" variant="p" sx={{ my: 2 }}>
              Address: 3, 3rd Main Rd, Jaladarsini Layout, Sanjaynagar,
              Bengaluru, Karnataka 560094
            </Typography>
            <Typography component="p" variant="p" sx={{ my: 2 }}>
              Phone: 098458 16116
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 5 }} />
        <Box>
          <Typography component="h2" variant="h5">
            Urban deccan pub indiranagar: Review
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ lineHeight: "2rem", my: 2 }}
          >
            Urban Deccan Pub, as the name itself suggests, offers food and
            cocktails that are inspired by the awe-inspiring cuisine of South
            India. It covers offerings from the states of Karnataka, Tamil Nadu,
            Kerala, and Andhra Pradesh. However, the best part about the place
            is the way the traditional Indian food of the south has been blended
            with contemporary innovations and an urban-scape.
          </Typography>
          <Typography component="p" variant="p">
            We ordered the signature offering of UDP – Deccan Chips. These were
            one-of-a-kind friend Malabar Parathas, with an aromatic seasoning.
            Another starter that I had from the fairly extravagant menu list was
            something called Mini Dosa Tacos and Idly & Co. Both the dishes were
            beyond my expectations, lip-smacking and truly worth a try.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
