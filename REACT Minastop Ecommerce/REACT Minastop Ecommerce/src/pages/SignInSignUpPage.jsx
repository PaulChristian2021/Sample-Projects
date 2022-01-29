import React from "react";
import c from "./SignInSignUpPage.module.css";

import FormWithInputs from '../components/FormWithInputs/FormWithInputs'

const SignInSignUpPage = () => {
  const fields = [
    {
      id: "email",
      placeholder: "Enter your email",
      inputType: "email",
      required: true
    },
    {
      id: "password",
      placeholder: "Enter your password",
      inputType: "password",
      required: true
    },
  ]
  const sign = true;
  return (
    <section className={`section ${c.section}`}>
      <FormWithInputs fields={fields} submitText={`Sign ${sign ? "In" : "Up"}`}>
      </FormWithInputs>
    </section>
  );
};

export default SignInSignUpPage;
