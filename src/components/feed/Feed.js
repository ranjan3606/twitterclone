import React, {useState, useEffect} from 'react'
import '../index.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../config/firebase'
import FlipMove from 'react-flip-move'


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {/* Post */}
            <FlipMove>
                {posts.map((post) => (
                    <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
