import { useState, useEffect } from "react";

import { Transition } from "react-transition-group";

import IntroPg from "./pages/IntroPg";
import Nav from "./components/Nav";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import "./";

function App() {
  const [showContact, setshowContact] = useState(false);
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setprojects(data);
        console.log(data);
      });
  }, []);


  function toggleContact(contact) {
    if (contact) {
      setshowContact(!showContact);
    } else if (!contact) {
      setshowContact(false);
    }
  }

  const transitionStyles = {
    entering: {transform: 'scale(0)'},
    entered:  {transform: 'scale(1)'},
    exiting:  {transform: 'scale(0)'},
    exited:  {transform: 'scale(0)'},
  }
  const defaultStyles ={
    transition: `all 200ms ease-in-out`,
    transform: 'scale(1)'
  }

  return (
    <div
      className="App"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          toggleContact();
        }
      }}
    >
      <IntroPg toggleContact={toggleContact} />
      <Nav toggleContact={toggleContact} />
      <Projects projects={projects} toggleContact={toggleContact} />
      <About toggleContact={toggleContact} />
      <Transition in={showContact} timeout={200} mountOnEnter unmountOnExit>
        {state => (
          <Contact
            toggleContact={toggleContact}
            style={{...defaultStyles, ...transitionStyles[state]}}
          />
        )}
      </Transition>
    </div>
  );
}

export default App;
