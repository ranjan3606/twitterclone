import React from 'react'
import '../index.css'
import SearchIcon from '@material-ui/icons/Search'

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetsContainer">
                <h2>What's happining</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" sourceName="Hello World" options={{height: 400}} />
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
                options={{text: "#React is awesome", via:"Ranjan Roy"}} />
            </div>
        </div>
    )
}

export default Widgets
