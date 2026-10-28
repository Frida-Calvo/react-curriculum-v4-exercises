//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The useEffect function was running on every re-render because it did not have a dependency array specified. By adding an empty array, I am specifiying to React that this will be a one-time re-render. The useState initialized count with 0, the component is rendered and returns 0. Then useEffect runs once and it calls setCount to increase count by 1, and this triggers another re-render. That value gets passed onto return. Since the array is empty, the effect does not run again because it tells React that there are no changing dependencies.
