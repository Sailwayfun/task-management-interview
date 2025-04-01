import { useState } from "react";

function TaskCounter({ name }: { name: string }) {
  const [tasks, setTasks] = useState(0);
  return (
    <>
      <h1>
        {name}'s tasks: {tasks}
      </h1>
      <button onClick={() => setTasks(tasks + 1)}>Complete Task</button>
    </>
  );
}

export default TaskCounter;
