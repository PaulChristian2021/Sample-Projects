import React from "react";

import IconButton from "../ui/IconButton";
import c from "./FormWithInputs.module.css";

const FormWithInputs = (props) => {
  const fields = props.fields.map((el) => {
    return (
      <div className={c.div} key={Math.random()}>
        <label htmlFor={el.id}>{el.id[0].toUpperCase() + el.id.slice(1)}</label>
        <input
          type="text"
          placeholder={el.placeholder}
          required={el.required}
        />
      </div>
    );
  });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {fields}
      {props.children}
      <IconButton className={c.button}>{props.submitText}</IconButton>
    </form>
  );
};

export default FormWithInputs;
