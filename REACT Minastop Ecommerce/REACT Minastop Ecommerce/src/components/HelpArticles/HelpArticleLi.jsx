import React from "react";
// import { Link } from "react-router-dom";
import c from "./HelpArticleLi.module.css";

const HelpArticleLi = (props) => {
  // console.log(props)
  // const a = props.article; 
  const categories = props.categories.map((c) => (
    <span className={c.category} key={c}>/{c}</span>
  ));
  return (
    <li className={c.li} onClick={() => props.toggleArticles(props.id)}>
      <q>{props.title}</q>
      <div>{categories}</div>
    </li>
  );
};

export default HelpArticleLi;
