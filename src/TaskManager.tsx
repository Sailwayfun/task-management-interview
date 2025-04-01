import { useState } from "react";
import TaskCounter from "./TaskCounter";

export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter name="Alice" key="Alice" />
      ) : (
        <TaskCounter name="Bob" key="Bob" />
      )}
      <button
        onClick={() => {
          setIsPersonAlice(!isPersonAlice);
        }}
      >
        Switch Person
      </button>
    </div>
  );
}
