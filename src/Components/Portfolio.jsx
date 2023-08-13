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
import image from "../images/hand.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Research Intern @ University of Alberta",
    description:
      "I was an international research intern in the Khaled Barakat's lab in the Faculty of Pharmacy and Pharmaceutical Sciences, working on a project called 'Applications of Machine Learning in Drug Discovery'. I spent four months in Canada to develop the project.",
    url: "#",
  },
  {
    title: "Research Associate @ Young Scientist Program (BMSIS)",
    description:
      "BMSIS is an international community committed to building a sustainable future and fostering public interest in science. I am involved in the project 'Improving Teacher Feedbacks in Science Learning' with Dr. Lev Horodyskyj.",
    url: "#",
  },
  {
    title: "Academic Vice President @ DASIUSP",
    description:
      "I am responsible for coordinate the academic team and its tasks, such as disseminate research opportunities, organizing extra classes, courses and lectures for the students of the bachelor.",
    url: "#",
  },
  {
    title: "Student Representative @ USP",
    description:
      "I represent  undergraduate students in the coordination of the Information Systems Comitee at EACH-USP, bringing their needs and point of view to create strategies.",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Some Experiences</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
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
      </div>
    </section>
  );
};

export default Portfolio;
