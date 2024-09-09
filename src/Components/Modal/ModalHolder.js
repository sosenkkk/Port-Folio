import React from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";
import "./ModuleHolder.css";
import { DiJava, DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import GitHub from "@mui/icons-material/GitHub";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiVisualstudiocode, SiFramer } from "react-icons/si";
import { SiIntellijidea, SiTypescript, SiMysql } from "react-icons/si";

const ModalHolder = (props) => {
  var modal = props.modalName;

  const closeModal = () => {
    props.onClose();
  };

  return (
    <React.Fragment>
      {modal === "projects" && (
        <Modal onClose={closeModal}>
          <h2 className="title_name">Projects</h2>
          <ul>
            <CartItem
              id="7"
              title="Carbon"
              describe="An e-commerce website for sanitary ware products only."
            />
            <CartItem
              id="4"
              title="Post It"
              describe="A blog sharing MERN website that allows you to post images also."
            />
            <CartItem
              id="6"
              title="GrubGuide"
              describe="A restaurant viewing website to checkout restaurants near you."
            />
            <CartItem
              id="5"
              title="Shop n Sell"
              describe="An E-commerce website to buy and sell products."
            />
            <CartItem
              id="1"
              title="Food Order App"
              describe="An app allows you to see whats on menu and place order."
            />
            <CartItem
              id="2"
              title="Expense Handler"
              describe="Allows you to handle expenses made using ReactJs. "
            />
            <CartItem
              id="3"
              title="Typo Application"
              describe="Type writer application made using Java and Java Fx."
            />
          </ul>
        </Modal>
      )}
      {modal === "skills" && (
        <Modal onClose={closeModal}>
          <h2 className="title_name">Skills</h2>
          <div className="skill_container">
            <div className="skill_item">
              <h3>Languages</h3>
              <ul>
                <li>
                  {" "}
                  <img
                    alt="c"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                  />{" "}
                  C{" "}
                </li>
                <li>
                  {" "}
                  <img
                    alt="c"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                  />{" "}
                  C++{" "}
                </li>
                <li>
                  {" "}
                  <DiJava /> Java
                </li>
                <li>
                  {" "}
                  <FaHtml5 /> HTML
                </li>
                <li>
                  {" "}
                  <FaCss3 /> CSS
                </li>
                <li>
                  {" "}
                  <DiJava /> JavaFx
                </li>
                <li>
                  {" "}
                  <SiJavascript /> JavaScript
                </li>
                <li>
                  <SiTypescript /> Typescript
                </li>
                <li>
                  <SiMysql /> Mysql
                </li>
              </ul>
            </div>
            <div className="skill_item">
              <h3>Frameworks / Libraries </h3>
              <ul>
                <li>
                  {" "}
                  <FaReact /> React Js
                </li>
                <li>
                  <FaNodeJs /> Node Js
                </li>
                <li>
                  <DiMongodb /> MongoDb
                </li>
                <li>
                  <SiFramer /> Framer Motion
                </li>
                <li>
                  <SiTailwindcss /> Tailwindcss
                </li>
                <li>
                  {" "}
                  <FaBootstrap /> BootStrap
                </li>
                <li>
                  {" "}
                  <SiJquery /> JQuery
                </li>
              </ul>
            </div>

            <div className="skill_item" style={{ height: "350px" }}>
              <h3>Tools</h3>
              <ul>
                <li>
                  {" "}
                  <SiVisualstudiocode /> Vs Code
                </li>
                <li>
                  {" "}
                  <SiIntellijidea /> Intellij
                </li>
                <li>
                  {" "}
                  <GitHub /> GitHub
                </li>
                <li>
                  <SiMysql /> Mysql
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      )}
      {modal === "experience" && (
        <Modal onClose={closeModal}>
          <h2 className="title_name">Experience</h2>
          <ul className="ul-margin-bottom">
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span>Iyra Consultants</span>{" "}
                <span style={{ fontSize: "16px" }}>(Backend Developer)</span>
              </h2>
            </li>
            <ul>
              <li>
                {" "}
                Built robust RESTful APIs, ensuring efficient data management
                and seamless integration with the front-end.
              </li>
              <li>
                {" "}
                Leveraged Retool to create a web application for easy data
                access and manipulation saving time by over 50%.
              </li>
              <li>
                Executed thorough testing and debugging to ensure the
                reliability and performance of the backend services
              </li>
            </ul>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span>Startoon Pvt Ltd</span>{" "}
                <span style={{ fontSize: "16px" }}>(Web Developer)</span>
              </h2>
            </li>
            <ul>
              <li>
                {" "}
                Developed an admin panel and optimized website design, reducing
                load time by over 10 seconds.
              </li>
              <li>
                {" "}
                Deployed and maintained application on AWS cloud servers,
                ensuring high availability.
              </li>
              <li>
                {" "}
                Utilized Puppeteer for PDF generation, integrated with MERN
                stack and PHP, enhancing performance by 20%.
              </li>
              <li>
                Collaborated with a team to integrate algorithms into a web app
                using Agile software development methods.
              </li>
            </ul>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span>Google Developer Student Clud</span>{" "}
                <span style={{ fontSize: "16px" }}>Domain Lead</span>
              </h2>
            </li>
            <li>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span>IOTA</span>{" "}
                <span style={{ fontSize: "16px" }}>Web Developer Lead</span>
              </h2>
            </li>
          </ul>
        </Modal>
      )}
      {modal === "achievements" && (
        <Modal onClose={closeModal}>
          <h2 className="title_name">Scholastic Achievements</h2>
          <div className="skill_item_scholastic">
            <ul>
              <li>
                Completed Hacktober Fest 2022 by contributing to over six
                repositories.
              </li>
              <li>
                Helped in conducing hackathon HackFrenzy for college fest,
                Abhisarga'23.
              </li>
              <li>
                Awarded Gold Medal in SilverZone International Math Olympiad
                twice at district level.
              </li>
              <li>
                Awarded Silver Medal in SilverZone Physics Olympiad at district
                level.
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ModalHolder;
