import React from 'react'
import '../index.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/Mail'
import BookmarkBorderIcon from '@material-ui/icons/Bookmark'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Button from '@material-ui/core/Button'



function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationIcon} text="Notification" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
