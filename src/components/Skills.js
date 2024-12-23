import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "I create well-structured and semantic web content using HTML. With clean and accessible markup, I ensure a strong foundation for every project.My expertise extends to modern HTML5 features for better functionality. Every tag serves a purpose, enhancing both design and user experience.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "I use CSS to craft visually appealing and responsive web designs. From Flexbox and Grid to animations, I bring designs to life with precision. My goal is to ensure seamless layouts that adapt beautifully across all devices. Attention to detail ensures consistency and a polished final look.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "I harness JavaScript to build dynamic and interactive web experiences. From DOM manipulation to API integration, I bring functionality to the forefront. With an eye for optimization, I ensure smooth and efficient performance. JavaScript makes every user interaction intuitive and engaging.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "I specialize in building dynamic single-page applications with React. Through component-driven development, I ensure reusability and scalability. Hooks and state management are tools I use to enhance user interfaces. With React, I deliver seamless, modern, and responsive applications.",
      icon: faReact,
    },
    {
      name: "Python",
      des: "Python is my go-to tool for backend systems, automation, and scripting. I focus on writing clean, efficient, and maintainable code. Proficient in frameworks like Flask and Django, I develop scalable applications. From small utilities to complex projects, Python helps me deliver results.",
      icon: faPython,
    },
    {
      name: "NodeJs",
      des: "I leverage Node.js to build fast and scalable server-side applications. Real-time systems, RESTful APIs, and efficient database interactions are my strengths. With asynchronous programming, I ensure high-performance backends. Node.js allows me to bridge the gap between frontend and backend seamlessly.",
      icon: faNodeJs,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Welcome to my arsenal of skills – a toolkit filled with tech, tricks,
        and maybe a little magic! From turning boring pages into vibrant
        masterpieces with HTML and CSS to convincing JavaScript to make things
        interactive (without breaking), I’ve got it covered. Need a backend that
        can handle anything? Node.js and Python are my trusty sidekicks. Want
        something modern and snazzy? React helps me craft apps that look good
        and run even better. Basically, I turn caffeine and code into amazing
        things. Scroll down and take a look – my skills are ready to impress
        (and maybe make you chuckle)!
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
