import Accordion from "./component/Accordion";
import { nanoid } from "nanoid";

const list = [
  {
    id: nanoid(),
    label: "Who are you?",
    content:
      "I'm Yağmur, self-taught front-end developer with a background in literature. I love creating things—anything from clay ashtrays to websites.",
  },
  {
    id: nanoid(),
    label: "Why front-end development?",
    content:
      "I’ve always wanted to do creative stuff. But I was also a rule-follower—because I was that nerdy language student who loved grammar. After some agonizing years of trying to find my passion, I finally discovered front-end development—where I can both write code by following rules and be as creative as I want. It’s the perfect combination for me.",
  },
  {
    id: nanoid(),
    label: "How did you teach yourself coding?",
    content:
      "I took JavaScript, CSS, and HTML courses by Jonas Schmedtmann, and learned React and Redux from Stephen Grider on Udemy. I followed along by building projects, solved coding challenges on CodeWars, and watched a lot of CSS topics on YouTube. I also had help from a mentor friend, who guided me when I got stuck or needed feedback. Now, I’m working on small personal projects to keep practicing and growing.",
  },
  {
    id: nanoid(),
    label: "What are your hobbies?",
    content:
      "I'm a bookworm. I enjoy drawing animals and practicing Muay Thai.",
  },
];

function App() {
  return (
    <div className="min-h-screen relative bg-red-400 flex justify-center items-center">
      <Accordion items={list} />
    </div>
  );
}
export default App;
