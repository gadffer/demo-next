// Import the LikeButton component, which is defined in like-button.js in the current folder
import LikeButton from './like-button';

// Define the Header component, which accepts a prop named title
function Header({ title }) {
  // Return an <h1> element. If title exists, display title; otherwise, display 'Default title'
  return <h1>{title ? title : 'Default title'}</h1>;
}

// Export the default HomePage component
export default function HomePage() {
  // Define an array with three names
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    // Return a <div> element containing multiple child components
    <div>
      {/* Use the Header component with the title prop set to "Develop. Preview. Ship." */}
      <Header title="Develop. Preview. Ship." />
      <ul>
        {/* Use the map method to iterate over the names array and generate an <li> element for each name */}
        {names.map((name) => (
          // Each <li> element has a key attribute set to name to ensure uniqueness and efficiency of the list
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/* Include the LikeButton component */}
      <LikeButton />
    </div>
  );
}
