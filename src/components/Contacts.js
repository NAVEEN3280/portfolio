import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+91 9360653280",
    },
    {
      title: "Email",
      value: "murugesannaveen357@gmail.com",
    },
    {
      title: "Instagram",
      value: "the_invencibleone",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I'm always excited to connect with new people, share knowledge, and
        explore collaboration opportunities. Whether you’re looking to discuss
        potential projects, share insights, or simply chat about technology,
        feel free to reach out! You can contact me through the following
        channels
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
