// import React from 'react'
// import { Box, Stepper, Button, Step, StepLabel } from "@mui/material";
// import { Formik, Form } from "formik";
// import { shades } from "../../theme";
// import { useSelector } from "react-redux";
// import * as yup from "yup";
// import FormikConrtol from './FormikConrtol'
// import { loadStripe } from "@stripe/stripe-js";


// const Checkout = () => {

//   const cart = useSelector((state) => state.cart.cart)
//   const initialValues = {
//     firstName: "",
//     country: "",
//     street1: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     email:"",
//     phone:""
//   };
//   const validationSchema = yup.object({
//     firstName: yup.string().required("Required"),
//     country: yup.string().required("Required"),
//     street1: yup.string().required("Required"),
//     city: yup.string().required("Required"),
//     state: yup.string().required("Required"),
//     zipCode: yup.string().required("Required")
//   })

//   const stripePromise = loadStripe(
//     "pk_test_51MVysjSBnJCv5qOlWCWlUb6zJoojATZfUuwyqQBtslv3jvDfZeVin7kQpQz9v0sJaYybf72pYWTV1TotVj3A8nYV00Gv6dYmg3"
//   );

// const onSubmit=values=>{
//   console.log("bhnnjjhjh",values);
// }

// const handlePayment = async()=>{

//   try{
//  const stripe = await stripePromise;

// const requestBody={
//   products: cart.map(({ id, count }) => ({
//             id,
//             count,
//           }))
//  }

//  const res = await fetch("http://localhost:1337/api/orders",
//  {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify(requestBody),
//  });
// // const res = await makeRequest.post('/orders',{
// //  ,
// // });
//   await stripe.redirectToCheckout({
//     sessionId: res.data.stripeSession.id,
//   })

//   }catch(error){
//  console.log(error);

//   }
// }
// const handleFormSubmit = async (values, actions) => {
//   makePayment(values);
//   actions.setTouched({})
// }

// // const handleFormSubmit = async (values) => {
// //   makePayment(values);
  
// // }


// async function makePayment(values) {
//   const stripe = await stripePromise;
//   const requestBody = {
//     userName: [values.firstName,],
//     email: values.email,
//     products: cart.map(({ id, count }) => ({
//       id,
//       count,
//     }))
//   }
//   const rsponse = await fetch("http://localhost:1337/api/orders",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(requestBody),
//     });
//   const session = await rsponse.json();
//   await stripe.redirectToCheckout({
//     sessionId: session.id,
//   })
// }
//   return (
//     <Box m="90px auto" width="80%" height="70vh">
//       <Stepper sx={{ m: "20px 0" }}>
//         <Step>
//           <StepLabel>Billing</StepLabel>
//         </Step>
//         <Step>
//           <StepLabel>Payment</StepLabel>
//         </Step>
//       </Stepper>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         // handleFormSubmit={handleFormSubmit}
//       >
//         {
//           formik => {

          
//            return <Form  onSubmit={handleFormSubmit}>
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='Name'
//                 name='firstName'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='Country'
//                 name='country'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='State'
//                 name='state'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='Street1'
//                 name='street1'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='ZipCode'
//                 name='zipCode'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='Email'
//                 name='email'
//               />
//               <FormikConrtol
//                 control='input'
//                 type='text'
//                 label='Phone'
//                 name='phone'
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 // disabled={!formik.isValid}
//                 color="primary"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: shades.primary[500],
//                   boxShadow: "none",
//                   color: "white",
//                   borderRadius: 0,
//                   padding: "15px 40px"
//                 }}
//               >
//                 PLACE ORDER
//               </Button>
//             </Form>
//           }
//         }
//       </Formik>
//     </Box>
//   );
// };
// export default Checkout
