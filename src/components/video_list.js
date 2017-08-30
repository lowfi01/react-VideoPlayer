// functional component
    // Does not - require any state, does not re-render its self
    // implements bootstrap using className
    

"use strict"

import React from 'react';

//IMPORT COMPONENT
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //Create Map
        const videoItems = props.videos.map((video) => {
            // Each loop iteration will create a video from the array
            // We then create a JSX tag that links to VideoListItem
            // We then pass the prop down containing the Individual Video data
            return <VideoListItem key={video.etag} video={video} />
        })


    return(// 
        <ul className="col-md-4 list-group">
                {videoItems}
        </ul>
    );
};

export default VideoList;