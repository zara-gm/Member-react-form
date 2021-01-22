import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Form } from "../components/Form";
import {
  Typography,
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
})

export const CodeConduct = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      conductAgreements: data.conductAgreements
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./slackconduct");
    setValues(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Typography component="h4" variant="h5">
          CYBERDEI ATTENDEES/MEMBERS PERSONAL CODE OF CONDUCT
</Typography>
      </section>
      <section>
        <ul>
          <li>We have a zero tolerance policy regarding harassment against anyone for any reason in our community.</li>
          <li>Harassment or hostile behavior are unwelcome, including speech that intimidates, creates discomfort,or interferes with a person's participation or opportunity for participation, in a conference, event or program.</li>
          <li>Harassment in any form, including but not limited to harassment based on alienage or citizenship, age, color, creed, disability, marital status, military status, national origin, pregnancy, childbirth, and pregnancy related medical conditions, race, religion, sex, gender, veteran status, sexual orientation or any other status protected by laws in which the CyberDEI meeting or event is being held, will not be tolerated.</li>
          <li>Harassment includes the use of abusive or degrading language, intimidation, stalking, harassing, photography or recording, inappropriate physical contact, sexual imagery and unwelcome sexual attention.</li>
          <li>A response that the participant was "just joking," or "teasing," or being "playful," will not be accepted.</li>
          <li>Anyone asked to stop any harassing behavior is expected to comply immediately.</li>
          <li>This Code of Conduct applies to everyone participating at CyberDEI, including attendees, CyberDEI members, CyberDEI Board members, sponsors, partners, speakers, and volunteers.</li>
          <li>Anyone can report harassment. If you are being harassed, notice that someone else is being harassed, or have any other concerns, a Board member should be notified immediately. Board members will investigate and take action accordingly.</li>
          <li>We reserve the right to remove and ban any persons who are not in compliance with our code of conduct.</li>
        </ul>
      </section>
      {/* <div className="form-group form-check">
          <InputLabel htmlFor="acceptTerms" className="checkbox">
            Accept terms &amp; Conditions
</InputLabel>
          <Controller
            as={Checkbox}
            name="acceptTerms"
            id="acceptTerms"
            type="checkbox"
            control={control}
            ref={register}
            className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div> */}
      <div className="form-group form-check">
        <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
        <label htmlFor="acceptTerms" className="form-check-label">
          I agree to abide by the CyberDEI Code of Conduct</label>
        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
      </div>
    </Form>
  );
};
