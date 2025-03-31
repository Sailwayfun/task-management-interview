## Question

What is virtual DOM and what purpose does it aim to solve??

### Answer

Virtual DOM is a JavaScript object that represents the real Document Object Model (DOM) of the browser. The real

DOM composes of HTML elements and its text nodes. When nodes needs to change color, do animation, or needs to be created/updated/deleted, the DOM needs to re-render them, but sometimes this re-rendering can be expensive and unperformant for the browser. Thus, we can leverage virtual DOM to record what part of the DOM needs to be updated and re-render that part on the real DOM, to be more efficient and provide faster user experience. React and Vue both uses virtual DOM to update nodes. (Though recently Vue announces "vapor mode", which could do without a virtual DOM and prevent the overhead to compute updates from it.)
