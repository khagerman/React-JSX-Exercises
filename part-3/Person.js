// Create a component called Person. Inside of this component,
//  render a p tag which displays “Learn some information about this person”.
//  Each person should have name and age properties.
// If the person is over 18 years old, display an additional h3 that says
// “please go vote!”. Otherwise, display an h3 that says “you must be 18”.
//  If the person’s name is longer than 8 characters, only display the
//  first six characters of their name.

// Add a property called hobbies to your Person component
//  that accepts an array of hobbies (an array of strings).
//  Your Person component should list each one of these hobbies as an li.

// Add an App component that renders at least three copies of t
// he Person component on the page.

const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <h3>Name: {name.length <= 8 ? name : name.slice(0, 8)}</h3>
      <p>Learn more about this person!</p>
      <ul>
        <li>Age: {age}</li>
        <li>
          {age >= 18 ? "Please go vote!" : "please vote when you turn 18!"}
        </li>
        <li>
          Hobbies:
          <ul>
            {hobbies.map((hobby) => (
              <li>
                <b>{hobby}</b>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
