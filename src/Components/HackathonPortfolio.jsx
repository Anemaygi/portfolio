/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/brain.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Plantei",
    description:
      "1st place @ SheHacks2021: Developing a mobile application with the aim of teaching users how to create their own vegetable gardens at home, while also providing lessons on nutrition education and offering easy recipes.",
    url: "https://youtu.be/nJFoDysb9yg",
  },
  {
    title: "PAND",
    description:
      "2nd place @ HackSSI2021: Development of a project using Vue.js, express and Nodejs. It was a mobile app that searches for places with accessibility for people with disabilities by reviews and filters for each disability.",
    url: "#",
  },
  {
    title: "ConectaRH",
    description:
      "1st place @ Experimenta!: It was a virtual platform to automatizate and accelerate the process and communication between human resources and employees. Its functionalities were a chatbot, departament overview and feedback system.",
    url: "#",
  },
  {
    title: "TACTIL",
    description:
      "3rd place @ PaySmart Innovathon: Development of an idea of a project called TACTIL, technology that turns existent e-banking websites in acessible websites for people with disabilities.",
    url: "https://youtu.be/VBkMN17Ezqw",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="hackathon">
      <h2>Hackathon Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
