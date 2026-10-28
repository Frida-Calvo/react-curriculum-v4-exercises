// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';
export default function BugProps({ name = 'friend' }) {
  let [message, setMessage] = useState(`Hello, ${name}`);

  function handleChange() {
    // setMessage('Hi, ' + name + '!');
    setMessage((prev) =>
      prev.includes('Hello') ? `Hi, ${name}` : `Hello, ${name}`
    );
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// Initially, the message was just a local variable that was being changed, but React needs to use states so it can re-render the UI and so it was not being tracked. So the variable "message" had to instead become a state, which I initialized with the original starting message using the name prop. I then used the setter function to change the string value of the state, triggering a state update that then tells React to re-render the message. I wrote my code with a ternary expression within the handleChange() using a functional updater function so that the user can toggle between messages as well.
