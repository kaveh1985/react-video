import React from 'react'
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video, index) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
    })

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;