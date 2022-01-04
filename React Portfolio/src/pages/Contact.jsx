import React, { useState } from "react";
import ReactDOM from "react-dom";
import c from "./Contact.module.css";
import Backdrop from '../components/Backdrop'

const Contact = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  const [msg, setmsg] = useState();
  const [errorbtn, seterrorbtn] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    if (name && email && msg) {
      alert(
        `Message not submitted!\nThis component is not working.\n\nDear ${name},\nPlease contact me at paulchristianmasayon2020@gmail.com.\n\nThanks for your trying to enter your info:\nNo.: ${tel}\nEmail: ${email}`
      );
      setname("");
      setemail("");
      settel("");
      setmsg("");
      props.toggleContact();
      seterrorbtn(false);
    } else {
      seterrorbtn(true);
    }
  }

  const btnerrorHandler = (e) => {
    seterrorbtn(false);
  };

  return ReactDOM.createPortal(
    <>
      <section
        className={`page ${c.sec} contactEl`}
        style={props.style}
        id="contact"
      >
        <form onSubmit={submitHandler} className="contactEl">
          <input
            className="contactEl"
            type="text"
            placeholder="Name/Organization"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
              btnerrorHandler();
            }}
          />
          <input
            className="contactEl"
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
              btnerrorHandler();
            }}
          />
          <input
            className="contactEl"
            type="tel"
            name=""
            id=""
            placeholder="Tel. no."
            value={tel}
            onChange={(e) => {
              settel(e.target.value);
              btnerrorHandler();
            }}
          />
          <div className="contactEl">
            <textarea
              className="contactEl"
              name=""
              id=""
              cols="28"
              rows="4"
              placeholder="Message..."
              value={msg}
              onChange={(e) => {
                setmsg(e.target.value);
                btnerrorHandler();
              }}
            ></textarea>
            <button className={`${errorbtn ? c.error : ""} contactEl`}>
              Send
            </button>
          </div>
        </form>
      </section>
      <Backdrop />
    </>,
    document.querySelector("#contactPortal")
  );
};

export default Contact;
