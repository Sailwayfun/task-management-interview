import GrandchildComponent from "./GrandchildComponent";
import PeopleContext from "./context/PeopleContext";
import { useContext } from "react";

function ChildComponent() {
  const { name, age } = useContext(PeopleContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <GrandchildComponent />
    </div>
  );
}

export default ChildComponent;
