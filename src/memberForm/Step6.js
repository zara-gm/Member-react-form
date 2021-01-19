import React from "react";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Form } from "../components/Form";
import MuiAutoComplete from "../controllers/MuiAutoComplete";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import ReactSelect from "react-select";
import ButtonsResult from "../controllers/ButtonsResult";
import DonwShift from "../controllers/DonwShift";
import options from "../constants/veteranSelectOptions";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider
} from "@material-ui/core";
import * as yup from "yup";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  ReactSelect: { value: "vanilla", label: "Vanilla" },
  Checkbox: false,
  switch: false,
  RadioGroup: "",
  numberFormat: 123456789,
  downShift: "apple"
};

const schema = yup.object().shape({
  veteranStatus: yup
    .string(),
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field")
    .min(3, "Name must be at least 3 characters"),
})

export const Step6 = () => {
  const { data } = useData();
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: data.firstName,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    console.log(data);
  };


  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <h3>Example Material UI Components</h3>
        <div className="container">
          <section>
            <label>Native Input:</label>
            <input name="Native" className="input" ref={register} />
          </section>

          <section>
            <label>MUI Checkbox</label>
            <Controller
              as={Checkbox}
              name="Checkbox"
              type="checkbox"
              control={control}
            />
          </section>

          <section>
            <label>Radio Group</label>
            <Controller
              as={
                <RadioGroup aria-label="gender">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              }
              name="RadioGroup"
              control={control}
            />
          </section>

          <section>
            <label>MUI TextField</label>
            <Controller as={TextField} name="TextField" control={control} />
          </section>

          <section>
            <label>MUI Select</label>
            <Controller
              as={
                <Select>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              }
              name="Select"
              control={control}
            />
          </section>

          <section>
            <label>MUI Switch</label>
            <Controller
              as={Switch}
              type="checkbox"
              name="switch"
              control={control}
            />
          </section>

          <section>
            <label>MUI Slider</label>
            <Controller
              name="MUI_Slider"
              control={control}
              defaultValue={[0, 10]}
              onChange={([, value]) => value}
              as={<Slider valueLabelDisplay="auto" max={10} step={1} />}
            />
          </section>

          <section>
            <label>MUI autocomplete</label>
            <MuiAutoComplete control={control} />
          </section>

          <section>
            <label>React Select</label>
            <Controller
              as={ReactSelect}
              options={options}
              name="ReactSelect"
              isClearable
              control={control}
            />
          </section>

          <section>
            <label>React Datepicker</label>
            <Controller
              as={ReactDatePicker}
              control={control}
              valueName="selected" // DateSelect value's name is selected
              onChange={([selected]) => selected}
              name="ReactDatepicker"
              className="input"
              placeholderText="Select date"
            />
          </section>

          <section>
            <label>NumberFormat</label>
            <Controller
              as={NumberFormat}
              thousandSeparator
              name="numberFormat"
              className="input"
              control={control}
            />
          </section>

          <section>
            <Controller as={DonwShift} control={control} name="downShift" />
          </section>
        </div>

        <ButtonsResult {...{ data, reset, defaultValues }} />
      </Form>
    </ThemeProvider>
  );
}