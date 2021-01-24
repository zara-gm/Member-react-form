import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
  Checkbox,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import ReactSelect from "react-select";
import Veteran from "../constants/veteranSelectOptions";

const schema = yup.object().shape({
  veteranStatus: yup
    .string(),
  identify: yup
    .string(),
  comment: yup.string()
    .min(10, "Must be at least 3 characters")
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export const Identity = () => {
  const classes = useStyles();
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      veteranStatus: data.veteranStatus,
      identify: data.identify,
      comments: data.comments
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./interests");
    setValues(data);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <label>Veteran Status</label>
              <Controller
                as={ReactSelect}
                options={Veteran}
                name="veteranStatus"
                isClearable
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control}
                defaultValue=""
              />
              <InputLabel htmlFor="identify-checkbox" className="checkbox">
                A woman
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control}
                defaultValue=""
              />
              <InputLabel htmlFor="identify-checkbox" className="checkbox">
                A woman
          </InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control}
                defaultValue=""
              />
              <InputLabel htmlFor="identify-checkbox" className="checkbox">
                A man
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control}
                defaultValue=""
              />
              <InputLabel htmlFor="identify-checkbox" className="checkbox">
                A man
          </InputLabel>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Form>
      </div>
    </React.Fragment >
  );
};
