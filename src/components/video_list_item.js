"use strict"

import React from 'react';

//const VideoListItem = (props) => {
    // this access the props we passed down from video_list.js
    // const video = props.video;
    // console.log(video)

const VideoListItem = ({video}) => { //ES6 des-constructor method 
    //console.log(video);
    return (
        <li className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" />
                </div>

                <div className="media-body">
                    <div className="media-heading">

                    </div>
                </div>
            </div>
            
                
        </li>
        );
};

export default VideoListItem;