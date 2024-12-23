import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Bulk Email Sender",
      des: "The Bulk Email Sender is a powerful tool designed to streamline mass email communication for newsletters, promotions, or organizational updates. It features custom email templates, CSV import for recipient lists, real-time status monitoring, and error handling to ensure reliable delivery. Built with Python and Flask, and integrated with secure SMTP protocols, this application offers a seamless, efficient, and scalable solution for bulk email operations, making it an essential tool for effective outreach.",
      mission:
        "To provide an affordable, efficient, and user-friendly alternative to expensive bulk email software, empowering users to send personalized, large-scale communications without the hefty price tag.",
      language: "HTML5, CSS3, Python,...",
      images: "../public/bulk.jpg",
    },
    {
      name: "SEO Analyzer",
      des: "This web-based SEO Analyzer Tool evaluates website performance by analyzing SEO elements like title tags, meta descriptions, keywords, mobile responsiveness, page speed, and backlinks. It generates an SEO score and provides actionable recommendations for improving search engine visibility. Built using Flask for the backend and React.js for the front-end, this tool helps users optimize their websites. Reports are available for download to track ongoing SEO improvements.",
      mission:
        "Our mission is to provide our company and our clients with a powerful, user-friendly SEO analysis tool that delivers real-time insights and actionable recommendations. Designed to enhance website performance, the SEO Analyzer aims to improve search engine visibility, user experience, and overall digital presence, helping businesses boost their online rankings, increase traffic, and achieve long-term success in the competitive digital landscape.",
      language: "HTML5, CSS3, Python,...",
      images: "../public/seo.jpg",
    },
    {
      name: "AI Chat Bot by using Ollama",
      des: "This local chatbot is developed using Ollama, an AI-powered platform that enables natural language processing (NLP) for real-time interactions. The chatbot operates locally, offering quick and privacy-focused responses to user queries without the need for external server dependencies. It is customizable for various applications, making it a versatile solution for dynamic customer support, personal assistance, and information retrieval. This project demonstrates the power of on-premise AI technology with a simple yet effective user experience.",
      mission:
        "Our mission is to provide efficient, privacy-focused, and customizable AI-driven chat solutions by utilizing Ollama’s natural language processing capabilities. This local chatbot aims to enhance user interaction, providing quick and accurate responses while maintaining full control and security by running entirely on local systems. Our goal is to improve the user experience by offering seamless communication and intelligent assistance without the need for external dependencies.",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "../public/chat.jpg",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Welcome to my project gallery – a showcase of ideas brought to life
        through code and creativity. Each project here represents countless
        lines of code, late-night problem-solving, and the joy of turning
        concepts into reality. From sleek user interfaces to robust backend
        solutions, my projects highlight my journey as a developer. They’re more
        than just applications – they’re stories of learning, growth, and making
        things work (sometimes on the first try!). Dive in, explore, and see how
        I’ve tackled real-world challenges with passion and innovation. I’m
        always excited to bring new ideas to life, and maybe your next project
        could be one of them!
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
