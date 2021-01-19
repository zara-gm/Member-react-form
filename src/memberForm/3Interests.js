import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { Form } from "../components/Form";
import {
  Checkbox,
  Grid,
  InputLabel,
  TextField
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({

})

export const Interests = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      interests: data.interests,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./codeofconduct");
    setValues(data);
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <label>What are your pronouns?</label>
          <section>
            {/* <TextField id="pronoun" name="pronoun" label="Let me type" /> */}
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control} defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              She/her
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control} defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              He/him
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control} defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              They/them
          </InputLabel>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control} defaultValue=""
            />
            <InputLabel htmlFor="identify-checkbox" className="checkbox">
              I prefer not to say
          </InputLabel>
            <Grid item xs={12} sm={6}>
              <TextField id="pronoun" name="pronoun" label="My pronoun is" fullWidth />
            </Grid><br />
            <label>Interests</label>
            <section>

              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Volunteering (general)
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Advocacy
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Career Coaching
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Skill building/Training
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Events
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Community Service
          </InputLabel>
              <Controller
                as={Checkbox}
                name="Checkbox"
                type="checkbox"
                control={control} defaultValue=""
              />
              <InputLabel htmlFor="interests-checkbox" className="checkbox">
                Volunteering with Cyberdei
          </InputLabel>
            </section>
          </section>
        </Grid>
      </Form>
    </React.Fragment>
  );
};
