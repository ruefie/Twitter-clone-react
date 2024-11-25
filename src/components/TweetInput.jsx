import React, {useState} from 'react';

const TweetInput = ({addTweet}) => {
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(tweetText);
    console.log('Tweet sent:', tweetText);
    setTweetText('');
  };

  const handleInputChange = (e) => {
    setTweetText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tweetText}
        onChange={handleInputChange}
        placeholder="What's happening?"
        maxLength={280}
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetInput;
