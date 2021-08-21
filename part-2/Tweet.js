// Define a Tweet component which takes as props the username of the user
// who wrote the tweet, the name of the user who wrote the tweet,
// the date of the tweet, and the message being tweeted.

// Create an App component that renders at least three tweets.

const Tweet = ({
  username,
  name,
  date = new Date().toISOString().slice(0, 10),
  message,
}) => {
  return (
    <div>
      <ul>
        <li>Username: {username}</li>
        <li>Name: {name}</li>
        <li>Date Posted: {date}</li>
        <li>Tweet: {message}</li>
      </ul>
    </div>
  );
};
