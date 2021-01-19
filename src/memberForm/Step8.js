import React from "react";
import { useData } from "../DataContext";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";

const schema = yup.object().shape({
  age: yup
    .number()
    .required("Please supply your age")
    .min(18, "You must be at least 18 years"),
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field")
    .min(3, "Name must be at least 3 characters"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  phoneNumber: yup
    .number()
  // .matches(/^\+\d+$/i, "Should contain numbers")
  // .max(11, "Max 10 characters"),

})

export const Step8 = () => {
  const { data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    console.log(data);
  };

  return (
    <div className="container">
      <h3>Example without Material UI</h3>
      <h3>Sign up and join</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="age">
          Are you at least 18 years of age? (Must be over 18 to register)
      </label>
        <select
          aria-invalid={errors.age ? "true" : "false"}
          ref={register({ required: "This is required" })}
        >
          <ErrorMessage errors={errors} name="age" as="p" />
          <option value="none">-None-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label>Experience Level</label>
        <select name="experienceLevel" ref={register}>
          <option value="none">-None-</option>
          <option value="0">0-5 years</option>
          <option value="6">6-10 years</option>
          <option value="11">11-15 years</option>
          <option value="16">16-20 years</option>
        </select>
        <label>Email
      <input type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </label>
        <small>We'll never share your email with anyone
                    else.</small>

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="name"
          name="firstName"
          aria-invalid={errors.firstName ? "true" : "false"}
          ref={register({ required: "First name is required.", minLength: 3, maxLength: 30 })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />


        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          aria-invalid={errors.lastName ? "true" : "false"}
          ref={register({ required: "Last name is required.", minLength: 3, maxLength: 30 })}
        />
        <ErrorMessage errors={errors} name="lastName" as="p" />
        <button>Next</button>
      </form>
    </div>

  )
}