import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Form } from "../components/Form";
import {
  Typography
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
})

export const SlackConduct = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      slackAgreement: data.slackAgreement
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./thankyou");
    setValues(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Typography component="h4" variant="h5">
          SLACK COMMUNITY GUIDELINES
</Typography>
      </section>
      <section htmlFor="slack">
        <ul>
          <li>The CyberDEI slack community is an inclusive place to collaborate, discuss cybersecurity, help one another, or give/get feedback. This isn't an exhaustive list of things that you can't do. Rather, take it in the spirit in which it's intended — a guide to make it easier to enrich all of us and the technical communities in which we participate.</li>
        </ul>
      </section>
      <section htmlFor="create-discussion">
        <ul>
          <Typography component="h4" variant="h6">
            CREATE DISCUSSION
</Typography>
          <li>We encourage members to create meaningful and respectful discussion around their experiences and projects/products.</li>
        </ul>
      </section>
      <section htmlFor="introduce-yourself">
        <ul>
          <Typography component="h4" variant="h6">
            INTRODUCE YOURSELF
</Typography>
          <li>All members of CyberDEI are encouraged to introduce themselves in the #welcome channel upon arrival. Give the community a short description of who you are and what you're working on. Feel free to share what you are looking to get out of the community.</li>
        </ul>
      </section>
      <section htmlFor="be-authentic">
        <ul>
          <Typography component="h4" variant="h6">
            BE AUTHENTIC
</Typography>
          <li>We encourage members to use their real name and represent themselves authentically. Please do not intentionally misrepresent yourself.
          Please edit your profile to include your pronouns (http://pronoun.is/) in your display name in the Slack channel.
    CyberDEI &#x2192; View Profile &#x2192; Edit Profile: enter display name AND pronouns.</li>
        </ul>
      </section>
      <section htmlFor="self-promotion">
        <ul>
          <Typography component="h4" variant="h6">
            SELF-PROMOTION
</Typography>
          <li>Active participation and genuine interest in the community goes a long way towards user engagement with what you are promoting.
You're invited to share what you are working on and keep the community up to date as you release new features or products, but please create discussion around your work. Please do not "cross-post" your message to multiple channels.</li>
        </ul>
      </section>
      <section htmlFor="be-kind">
        <ul>
          <Typography component="h4" variant="h6">
            BE KIND TO YOURSELF AND OTHERS
</Typography>
          <li>CyberDEI is an inclusive community of varied backgrounds, from student to professional. Although the community permits a wide range of humor, please be respectful and courteous to other members. Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society.</li>
          <li>If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, please recognize their efforts.
As with any large group of people, disagreements will happen. We understand that you'll have some strong opinions, but we still expect courtesy during a debate and expect you to refrain from personal attacks.</li>
          <li>If we see members acting unprofessional moderators reserve the right to remove them from the community.</li>
        </ul>
      </section>
      <section htmlFor="unacceptable-behavior">
        <ul>
          <Typography component="h4" variant="h6">
            CONSEQUENCES OF UNACCEPTABLE BEHAVIOR
</Typography>
          <li>All members of the CyberDEI Slack community are required to read and adhere to the official Code of Conduct (https://www.cyberdei.org/codeofconduct) as well as abide by these guidelines. Failure to adhere to the community guidelines can result in your messages being removed. Repeated violations will result in loss of access to the community.
          Unacceptable behavior from any community member, including leadership and those with decision-making authority, will not be tolerated.
          Anyone asked to stop unacceptable behavior is expected to comply immediately.
If a community member engages in unacceptable behavior, we may take any action deemed appropriate, up to and including a temporary ban or permanent expulsion from the community without warning.</li>
        </ul>
      </section>
      <section htmlFor="reporting-violations">
        <ul>
          <Typography component="h4" variant="h6">
            REPORTING VIOLATIONS
</Typography>
          <li>If you are subject to or witness unacceptable behavior, or have any other concerns, please notify us as soon as possible by emailing conduct@cyberdei.org or pinging an admin on Slack.</li>
        </ul>
      </section>
      <h4>EFFECTIVE DATE: 08.07.2020</h4>
      <div className="form-group form-check">
        <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
        <label htmlFor="acceptTerms" className="form-check-label">I agree to abide by the CyberDEI Slack Community Guidelines</label>
        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
      </div>

    </Form>

  );
};
