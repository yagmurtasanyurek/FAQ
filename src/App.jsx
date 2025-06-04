import Accordion from "./component/Accordion";
import { nanoid } from "nanoid";

const list = [
  {
    id: nanoid(),
    label: "Who are you?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adiperunt magni eveniet, ducimus doloribus nostrum dolores illo sed soluta accusamus!",
  },
  {
    id: nanoid(),
    label: "Where did you study?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adiperunt magni eveniet, ducimus doloribus nostrum dolores illo sed soluta accusamus!",
  },
  {
    id: nanoid(),
    label: "WWhy did you chose front-end?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adiperunt magni eveniet, ducimus doloribus nostrum dolores illo sed soluta accusamus!",
  },
];

function App() {
  return <Accordion items={list} />;
}
export default App;
