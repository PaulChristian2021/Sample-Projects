import React from "react";
import c from "./About.module.css";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoMdGlobe,
} from "react-icons/io";
import {DiJavascript} from 'react-icons/di'
import { RiVuejsFill, RiReactjsFill, RiToolsFill, RiGithubFill } from "react-icons/ri";
const About = (props) => {
  return (
    <section className={`page ${c.sec}`} id="about" onClick={() => {
      props.toggleContact();
    }}>
      <h2>About Me</h2>
      
      <section className={c.me}>
        <div>
          <h3>What I Have Worked With</h3>
          <ul className={c.ul}>
            <p>
              As indicated in the projects above, I use technologies and
              frameworks for Frontend Web Development.
            </p>
            <div className={c.tools}>
              <li>
                <IoLogoHtml5 className={c.HTML} />
                HTML
              </li>
              <li>
                <IoLogoCss3 className={c.CSS} />
                CSS
              </li>
              <li>
                <DiJavascript className={c.JS} />
                JavaScript
              </li>
              <li>
                <RiVuejsFill className={c.Vue3} />
                Vue 3 JS
              </li>
              <li>
                <RiReactjsFill className={c.React} />
                React JS
              </li>
              <li>
                <IoMdGlobe className={c.API} />
                Web APIs
              </li>
              <li>
                <RiToolsFill className={c.LIB} />
                Third-party libraries
              </li>
              <a  className={c.GH} href="https://github.com/PaulChristian2021" target='_blank' title='View GitHub Repo'>
              <li >
                <RiGithubFill/>
                GitHub
              </li>
              </a>
            </div>
            <p>
              However, I do not plan to remain in only using these. My next
              goal is Fullstack Web Development.
            </p>
          </ul>
        </div>
        <div>
          <h3>Things I like</h3>
          <ul className={c.ul}>
            <dl>
              <dt>Reading</dt>
              <dd>
                I read novels, manga, manhwa, interesting articles, social media, quotes.
              </dd>
            </dl>
            <dl>
              <dt>Listening to music</dt>
              <dd>I have a wide range of music taste. As far as I know.</dd>
            </dl>
            <dl>
              <dt>Self-improvement</dt>
              <dd>Mental, physical, emotional, and maybe spiritual.</dd>
            </dl>
            <dl>
              To me, self-improvement is not just about my person but also
              everything around me. After all, you are your environment.
              Exceptions there are, of course.
            </dl>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
