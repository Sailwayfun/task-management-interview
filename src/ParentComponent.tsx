import { useState, useContext } from "react";
import PeopleContext from "./context/PeopleContext";
import ChildComponent from "./ChildComponent";
import GrandchildComponent from "./GrandchildComponent";

function ParentComponent() {
  // const [name, setName] = useState("Naro");
  // const [age, setAge] = useState(12);
  const { name, age } = useContext(PeopleContext);
  return (
    <div>
      <ChildComponent />
      <GrandchildComponent />
    </div>
  );
}

export default ParentComponent;
