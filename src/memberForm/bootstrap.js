// import React from "react";
// import { useHistory } from "react-router-dom";
// import { useData } from "../DataContext";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import "bootstrap/dist/css/bootstrap.css";
// import { ErrorMessage } from '@hookform/error-message';
// import * as yup from "yup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// const schema = yup.object().shape({
//   // over18: yup
//   //   .boolean()
//   //   .oneOf([true], "Must be 18 or older to register"),
//   experienceLevel: yup
//     .string(),
//   firstName: yup
//     .string().required("First name is a required field")
//     .matches(/^([^0-9]*)$/, "First name should not contain numbers")
//     .min(2, "Name must be at least 2 characters"),
//   lastName: yup
//     .string()
//     .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
//     .required("Last name is a required field")
//     .min(2, "Name must be at least 2 characters"),
//   email: yup
//     .string()
//     .email("Email should have correct format")
//     .required("Email is a required field"),
//   // phoneNumber: yup
//   //   .string()
//   //   .matches(phoneRegExp, 'Phone number is not valid')
//   //   .min(10, "to short")
//   //   .max(10, "to long"),
// })

// export const PersonalInfo = () => {
//   const { setValues, data } = useData();
//   const history = useHistory();
//   const { register, handleSubmit, control, errors } = useForm({
//     defaultValues: {
//       over18: data.over18,
//       experienceLevel: data.experienceLevel,
//       firstName: data.firstName,
//       lastName: data.lastName,
//       email: data.email,
//       // phoneNumber: data.phoneNumber
//     },
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = () => {
//     console.log(onSubmit);
//     history.push("./identity");
//     setValues(data);
//   };

//   return (
//     <div className="container">
//       <div className="row mb-5">
//         <div className="col-lg-12 text-center">
//           <h3 className="mt-5">Personal Information</h3>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-row">
//           <div className="form-group col-lg-12">
//             <p>Are you at least 18 years of age? (Must be at least 18 to register)</p>
//             <div className="form-check form-check-inline">
//               <div className="custom-control custom-radio custom-control-inline" htmlFor="over18">
//                 <label htmlFor="over18" className="custom-control-label" for="customRadioInline1">Yes</label>
//                 <input
//                   ref={register}
//                   id="over18"
//                   type="radio"
//                   name="over18"
//                   className="custom-control-input"
//                   value="yes"
//                 />
//               </div>
//               <div className="custom-control custom-radio custom-control-inline">
//                 <label htmlFor="over18" className="custom-control-label" for="customRadioInline1">No</label>
//                 <input
//                   ref={register}
//                   id="over18"
//                   type="radio"
//                   name="over18"
//                   className="custom-control-input"
//                   value="no"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               ref={register}
//               id="firstName"
//               type="text"
//               label="First Name"
//               name="firstName"
//               placeholder="Enter First Name"
//               error={!!errors.firstName}
//               helperText={errors?.firstName?.message}
//             />
//             {/* <ErrorMessage className="invalid-feedback" name="firstName" as="div" errors={errors} /> */}
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               ref={register}
//               id="lastName"
//               type="text"
//               label="Last Name"
//               name="lastName"
//               placeholder="Enter Last Name"
//               error={!!errors.lastName}
//               helperText={errors?.lastName?.message}
//             />
//           </div>
//         </div>
//         <div class="form-group">
//           <label htmlFor="email">Email address</label>
//           <input
//             ref={register}
//             id="email"
//             type="email" placeholder="Enter email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input
//             ref={register}
//             id="address"
//             type="text"
//             label="Address"
//             name="address"
//             placeholder="1234 Main St"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address2">Address 2</label>
//           <input
//             ref={register}
//             id="address2"
//             type="text"
//             name="address2"
//             placeholder="Apartment, studio, or floor"
//           />
//         </div>

//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="city">City</label>
//             <input ref={register} type="text" id="city"
//             />
//           </div>
//           <div className="form-group col-md-4">
//             <label htmlFor="state">State</label>
//             <select id="state" className="form-control">
//               <option selected>Choose...</option>
//               <option>...</option>
//             </select>
//           </div>
//           <div className="form-group col-md-2">
//             <label htmlFor="zipcode">Zip</label>
//             <input ref={register} type="number" className="form-control" id="zipcode"
//             />
//           </div>
//         </div>
//         <button className="btn btn-secondary btn-block" type="submit">Next</button>
//       </form>
//     </div>
//   );
// };