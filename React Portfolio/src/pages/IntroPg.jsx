import React from "react";
import c from "./IntroPg.module.css";

const IntroPg = (props) => {
  return (
    <section className={`page ${c.sec}`} id="home" onClick={() => {props.toggleContact()}}>
      <h1>Happy New Year</h1>
      <p>Hi. I'm Paul Christian.</p>
      <p>
        I am looking for a position to fill in. Preferrably one with necessities
        overlapping my current skills.
      </p>
      <p>And it would be great if more is required than my current skills.</p>
      <p>After all, how am I to grow?</p>
      <p>Just kidding. I'm a junior developer with lots to improve upon.</p>
      <p>Explore my sites.</p>
    </section>
  );
};

export default IntroPg;
