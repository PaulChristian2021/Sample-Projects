import React from "react";
import c from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={c.footer}>
      <p>
        Minastop is created for learning and display purposes as intended by the
        developer. The credit for the resources in this site and the tools used
        to make them goes to their respective owners.
      </p>
      <p>Copyright 2022 by Paul Christian. All rights reserved. Powered by React. Email: <a href="mailto:paulchristianmasayon2020@gmail.com">
           minastop@shop.com
        </a>
      </p>
      <img src="../../logo192.png" alt="Minastop logo" />
    </footer>
  );
};

export default Footer;
