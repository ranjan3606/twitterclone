import React, { useState } from 'react'
import {Button, Avatar} from '@material-ui/core'
import db from '../config/firebase'


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Pawan Kumar',
            username: 'pawan33000',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://static.toiimg.com/thumb/msid-74343235,width-640,resizemode-4/74343235.jpg"
        });

        setTweetMessage("");
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://lh3.googleusercontent.com/proxy/sQgdEWLgAzZictChJmM6LWXVJA39X-M_a_3wBgq3iSjhXZ-uHAqH6e_NfXqYzqjnm0Y6QZF0JipUHBi2ULBuEaWUyKY" />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening" 
                    type="text" 
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox_inputImage" 
                    placeholder="Enter image Url" 
                    type="text" 
                    />
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    ) 
}

export default TweetBox
