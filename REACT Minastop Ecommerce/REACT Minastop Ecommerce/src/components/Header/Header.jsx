import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import c from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  const [header, setheader] = useState(true);
  const [top, settop] = useState(0);
  const [scrollY, setscrollY] = useState(0);

  // sets the header visibility (scroll)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollY(window.scrollY);
    });
  });
  useEffect(() => {
    const handler = setTimeout(() => {
      if (scrollY > top) {
        setheader(false);
      } else {
        setheader(true);
      }
    }, 30);
    return () => {
      clearTimeout(handler);
      settop(scrollY);
    };
  }, [scrollY]);

  return (
    <>
      <header className={c.header} style={{ top: header ? "0px" : "-50px" }}>
        <div>
          <h1>
            <Link to="/">Minastop</Link>
          </h1>
          <HeaderNav />
        </div>
      </header>
      <div style={{ height: "50px",backgroundColor:'#e3e3cd' }}></div>
    </>
  );
};

export default Header;
