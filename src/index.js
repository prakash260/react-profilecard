import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skillData = [
  {
    skill: "React",
    level: "Advanced",
    color: "blue",
  },
  {
    skill: "Node",
    level: "Advanced",
    color: "orange",
  },
  { skill: "MongoDB", level: "Beginner", color: "yellow" },
  { skill: "AWS", level: "Advanced", color: "red" },
  { skill: "ETL", level: "Advanced", color: "green" },
  { skill: "Python", level: "Advanced", color: "violet" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="prakash.jpg" alt="Prakash Chebolu" />;
}

function Intro() {
  return (
    <div>
      <h1>Prakash Chebolu</h1>
      <p>
        I am a Data engineer by profession You can speak about Data,AWS
        Cloud,ETL & Food with me
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/* <Skill skill="React" level="Advanced" color="blue" />
      <Skill skill="Node" level="Advanced" color="orange" />
      <Skill skill="MongoDB" level="Beginner" color="yellow" />
      <Skill skill="AWS" level="Advanced" color="red" />
      <Skill skill="ETL" level="Advanced" color="green" />
      <Skill skill="Python" level="Advanced" color="violet" /> */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "😀"}
        {level === "Advanced" && "💪"}
        {level === "Intermediate" && "👍"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
