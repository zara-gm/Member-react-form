import React from "react";
import { MainContainer } from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";


export const ThankYou = () => {

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          Thanks for signing up!
        </Typography><br />
        <Typography component="h6" variant="h6">
          Please check your email for further instructions
        </Typography>
      </MainContainer>
    </>
  );
};