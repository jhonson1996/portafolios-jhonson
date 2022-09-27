import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import style from "./Socials.module.css";

export const Socials = () => {
  const socials = [
    {
      id: "1",
      name: "linkedin",
      link: "https://www.linkedin.com/in/jhon-alexander-caicedo-balanta-422ba3216/",
      icon: <FaLinkedinIn />,
    },
    {
      id: "3",
      name: "github",
      link: "https://github.com/jhonson1996",
      icon: <FaGithub />,
    },
  ];

  return (
    <address className={style.socials}>
      {socials.map((social) => (
        <a
          className={style.social}
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </address>
  );
};
