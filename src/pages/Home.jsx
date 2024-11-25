import '../App.css'
import React, { useState } from 'react'
import TweetList from '../components/TweetList'
import TweetInput from '../components/TweetInput'


const Home = () => {
const [tweets, setTweets] = useState([])
const addTweet = (tweet) => {
  setTweets([tweet, ...tweets])
};

return(
  <div className="main-content">
    <TweetInput addTweet={addTweet} />
    <TweetList tweets={tweets} />
  </div>
)

}

export default Home;