import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>NAVEEN</span>
        </div>
        <div className="des">
          {/* 30 */}
          Hello, I’m Naveen, a developer with expertise in front-end development
          and Python, currently expanding my knowledge in back-end technologies,
          React, and Flutter to build cross-platform applications. I contribute
          to innovative projects at Nool Media, a startup under Vallaham
          Foundations, where I continuously strive to learn and grow. I began my
          professional journey as a mechanical engineer after earning my B.E.
          from Nandha Engineering College, eventually transitioning into
          programming out of a deep interest in technology. Whether designing
          user interfaces or building robust back-end systems, I am committed to
          creating efficient and impactful solutions. Let’s build something
          extraordinary together.
        </div>

        {/* <a
          href="/democv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV
        </a> */}
      </div>
      <div className="avatar">
        <div className="card">
          <img src="../public/avatar1.jpeg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Indian</div>
            <div>6 mons</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
