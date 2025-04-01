## Question

Read the code below, please figure out why after “Switch Person” button clicked, the
tasks state doesn’t update correctly, and how to make it update as we expected

### Answer

According to React docs [(https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key)], same component at the same position of the DOM tree would share state, thus the task count becomes shared state of Alice and Bob.

We can reset the count state by giving two TaskCounter different keys. React would treat two components with different keys as living at different positions, thus the state won't be shared.
