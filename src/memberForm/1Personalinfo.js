import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  over18: yup
    .boolean()
    .oneOf([true], "Must be 18 or older to register"),
  experienceLevel: yup
    .string(),
  firstName: yup
    .string().required("First name is a required field")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
})

export const PersonalInfo = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      over18: data.over18,
      experienceLevel: data.experienceLevel,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./identity");
    setValues(data);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Sign up and join CyberDEI! <br /> Please fill out as much information as you feel comfortable sharing. <br /><small>This information will only help us provide the best resources for you and the inclusive community we are trying to build.</small>
      </Typography><br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p className="over18">
              &#9888; Are you at least 18 years of age? (Must be 18 or older to register)
</p>
            <Controller
              as={
                <RadioGroup aria-label="over18" name="over18" row>
                  <FormControlLabel
                    ref={register}
                    id="yes"
                    name="yes"
                    value="yes" label="Yes"
                    control={<Radio />} required
                  />
                  <FormControlLabel
                    ref={register}
                    id="no"
                    name="no"
                    value="no"
                    control={<Radio />}
                    label="No" error={!!errors.over18} helperText={errors?.over18?.message}
                  />
                </RadioGroup>
              }
              name="RadioGroup"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              ref={register}
              id="firstName"
              type="text"
              label="First Name"
              name="firstName"
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              type="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              type="number"
              name="phone"
              label="Phone Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="experienceLevel-select">
              Experience Level
          </InputLabel>
            <Controller
              control={control}
              name="experienceLevel"
              as={
                <Select id="experienceLevel" name="experienceLevel" error={!!errors.experienceLevel} helperText={errors?.experienceLevel?.message} ref={register}>
                  <MenuItem value={0}>0-5 years</MenuItem>
                  <MenuItem value={6}>6-10 years</MenuItem>
                  <MenuItem value={11}>11-15 years</MenuItem>
                  <MenuItem value={16}>16 +years</MenuItem>
                </Select>
              }
            />
          </Grid>
        </Grid>
      </Form>
    </React.Fragment>
  );
}