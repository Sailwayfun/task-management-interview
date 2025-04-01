## Question

Can you explain about the type of never and what is the differ with void?

### Answer

Type never means the values should not exist, for example, you can create union type like:

```
type Staff = {
    name: string;
    adminID: never;
}
```

Then if someone pass an adminID to create a user, TypeScript would complain. This is a great way to strengthen type safety.

Type void basically means "no value", it's commonly used to annotate the return type of functions that do not return concrete values, like

```
function logger(a: string): void {
   console.log(a)
}
```

So the two terms means different things. Never does not match any value, but it's a way to say there should not be a value, and void means "there are no concrete value"
