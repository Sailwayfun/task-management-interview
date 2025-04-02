## Question

Read about the code below, suggest how to improve the code.

### Answer

It seems that all components share two states: `name` and `age`, so the two states are pass down to `ChildComponent` and `GrandChildComponent`, this can cause props drilling, if we need to pass props to some components that do not use the state variables. A solution to prop drilling is using React Context API.

See the implementation in src folder.
