import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import back from "../images/kishan_backgroound.png";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          // border: '1px solid red',
          backgroundImage: `url(${back})`,
          textAlign: "center",
          color: "white",
          minHeight: "75vh",
          padding: "3rem 0",
          "& h4": {
            fontWeight: "bold",
            marginTop: 2,
            marginBottom: 5,
            fontSize: "2.8rem",
          },
          "& p": {
            textAlign: "left",
            fontSize: "1.6rem",
            maxWidth: "80%",
            margin: "0 auto ",
          },
          "@media (max-width:800px)": {
            "& h4 ": {
              fontSize: "1.5rem",
            },
            "& p": {
              fontSize: "1rem",
            },
          },
          "@media (max-width:1000px)": {
            "& h4 ": {
              fontSize: "2rem",
            },
            "& p": {
              fontSize: "1.4rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
