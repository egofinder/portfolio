import { useState } from "react";
import Titles from "./components/titles";
import Descriptions from "./components/descriptions";
import Style from "./index.module.scss";

const skills = [
  {
    title: "MongoDB",
    description:
      "Worked with a real estate dataset containing 170,000 listings.",
    speed: 0.5,
  },
  {
    title: "Laravel",
    description: "Developed APIs for a real estate management service",
    speed: 0.6,
  },
  {
    title: "MySQL",
    description: "Architected data schemas for a real estate platform.",
    speed: 0.7,
  },
  {
    title: "Next JS",
    description:
      "Developing my portfolio site to showcase my skills and projects.",
    speed: 0.9,
  },
];

function WhatDoIDo() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <section className={Style["what-i-do-section"]}>
        <div className={Style["contents-wrapper"]}>
          <div className={Style["title"]}>
            <p>WHAT I DO</p>
          </div>
          <div className={Style["content"]}>
            <Titles data={skills} setSelectedSkill={setSelectedSkill} />
            <Descriptions data={skills} selectedSkill={selectedSkill} />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatDoIDo;
