# React components lifecycle

## Lifecycle

A component in react has a lifecycle that is divided into three phases:

1. Mounting
2. Updating
3. Unmounting

### Mounting

This phase is when the component is being created and inserted into the DOM.

To trigger the mounting phase, we use the `useEffect` hook with an empty array as the second argument. This will make the effect run only once when the component is mounted.

```javascript
useEffect(() => {
  // code to run when component is mounted
}, []);
```

### Updating

This phase is when the component is being re-rendered due to changes in the state or props.

To trigger the updating phase, we use the `useEffect` hook with an array of dependencies as the second argument. This will make the effect run when any of the dependencies change.

```javascript
useEffect(() => {
  // code to run when component is updated
}, [dependency1, dependency2]);
```

### Unmounting

This phase is when the component is being removed from the DOM.

To trigger the unmounting phase, we return a cleanup function from the effect. This function will be called when the component is unmounted.

```javascript
useEffect(() => {
  // code to run when component is mounted

  return () => {
    // code to run when component is unmounted
  };
}, []);
```
