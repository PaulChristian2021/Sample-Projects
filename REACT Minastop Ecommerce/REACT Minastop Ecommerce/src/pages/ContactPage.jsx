import React from "react";
import FormWithInputs from "../components/FormWithInputs/FormWithInputs";

const ContactPage = () => {
  const fields = [
    {
      id: "email",
      placeholder: "Enter your email",
      inputType: "email",
      required: true
    },
    {
      id: "subject",
      placeholder: "Enter the subject",
      inputType: "text",
      required: false
    },
  ];


  return (
    <section className={`section`}>
      <FormWithInputs fields={fields} submitText={`Submit`}>
        <textarea style={{padding:'10px', marginTop:'10px'}} id="" cols="30" rows="10" placeholder="What's on your mind?" required></textarea>
      </FormWithInputs>
    </section>
  );
};

export default ContactPage;
