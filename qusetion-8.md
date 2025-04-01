## Question

/** Read about the code below, please describe the issues and how you will be going to
improve it **/
/\*_ Code block start _/
const TodoList = () => {
const [todos, setTodos] = useState([
{ id: 1, text: '學習 React', completed: false, studyPoint: 3 },
{ id: 2, text: '建立專案', completed: false, studyPoint: 1 }
]);
const { id, text, studyPoint } = todos;
const [basePoints, setbasePoints] = useState(3);
const [sumPoints, setSumPoints] = useState(0);

const toggleTodo = (id) => {
const todo = todos.find(t => t.id === id);
todo.completed = !todo.completed;
setTodos(todos);
};
const handleStudyPointsChange = (e) => {
basePoints(e.target.value);
setSumPoints(parseInt(value1) + parseInt(e.target.value));
};

return (

<div>
<p>課程名稱: {text}</p>
<label>學習點數: </label>
<input type="number" value={studyPoint} onChange={handleStudyPointsChange} />
<p>總累積點數: {sumPoints}</p>
<button onClick={toggleTodo(id)}>篩選課程</button>
</div>
);
}
/** Code block end */

### Answer

1. There seems to be missing a `Todo` component, since you cannot possibly destructure properties from an array of `todos`, and `todos` seems unused in the UI.
2. `toggleTodo` should not mutate the todo object directly, because React use Object.is to judge if a state needs updating, mutating an object would not trigger re-render. Thus should be:

```
const toggleTodo = (id) => {
const todo = todos.find(t => t.id === id);
const updatedTodo = {...todo, completed: !todo.completed}
setTodos([...todos, updatedTodo]);
};

```

Is basePoints a function? looks confusing, might be `setBasePoints` or `setStudyPoints`? but sumPoint may mean the sum of all study point?, should be:

```
const handleStudyPointsChange = (e) => {
setSumPoints(v => v + e.target.value);
};
```
