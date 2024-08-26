import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Node" emoji="💪" color="orange" />
      <Skill skill="MongoDB" emoji="👍" color="yellow" />
      <Skill skill="AWS" emoji="💪" color="red" />
      <Skill skill="ETL" emoji="💪" color="green" />
      <Skill skill="Python" emoji="💪" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
