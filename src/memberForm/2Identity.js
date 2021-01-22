import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
  Checkbox,
  Grid,
  InputLabel,
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


export const Identity = () => {
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
          {/* <Typography variant="h6">
            I identify as (check all you are comfortable with)</Typography> */}
          <label>I identify as (check all you are comfortable with)</label>
          <section>
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
              Non-binary
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              LGBTQIA+
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Black or African American
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Indigenous
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              A person of color
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Hispanic
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Latinx
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Latina / Latino
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Asian / Pacific Islander
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Middle Eastern
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              White / Caucasian
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              An immigrant
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Multiracial
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              A parent
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Disabled
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
              defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              Other
          </InputLabel>
          </section>
          <section>
            <Grid item xs={12} sm={6}>
              <TextField id="other" name="other" label="Other" fullWidth />
            </Grid><br />
          </section>
        </Grid>
      </Form>
    </React.Fragment >
  );
};
