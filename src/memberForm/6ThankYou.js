import React, { useState } from "react";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import { useData } from "../DataContext";
import { MainContainer } from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "../components/PrimaryButton";

export const ThankYou = () => {
  const [success, setSuccess] = useState(false);
  const { data } = useData();


  const onSubmit = async () => {
    const formData = new FormData();

    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      Swal.fire("Thanks for signing up", "success");
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <>
      <React.Fragment>
        <MainContainer>
          <Typography component="h2" variant="h5">
            Thanks for signing up!
        </Typography><br />
          <Typography component="h6" variant="h6">
            Please check your email for further instructions
        </Typography>
          <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
        </MainContainer>
      </React.Fragment>

    </>
  );
};