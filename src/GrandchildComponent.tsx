import PeopleContext from "./context/PeopleContext";
import { useContext } from "react";

function GrandchildComponent() {
  const { name, age } = useContext(PeopleContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default GrandchildComponent;
