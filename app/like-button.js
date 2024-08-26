// 'use client'; indicates that this file is a client component, usually used in Next.js to signify that this component runs only in the browser
'use client';

// Import the useState hook from the 'react' package for managing component state
import { useState } from 'react';

// Define and export the LikeButton component
export default function LikeButton() {
  // The useState hook is used to create a state variable 'likes' and a function 'setLikes' to update it
  // Initial value is 0
  const [likes, setLikes] = useState(0);

  // Define a function to handle click events
  function handleClick() {
    // When the button is clicked, call setLikes to update the 'likes' state, incrementing its value by 1
    setLikes(likes + 1);
  }

  // Return a <button> element that displays the current 'likes' count
  // When the button is clicked, the handleClick function is triggered
  return <button onClick={handleClick}>Like ({likes})</button>;
}
