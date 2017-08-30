// functional component
    // Does not - require any state, does not re-render its self
    // implements bootstrap using className
    

"use strict"

import React from 'react';



const VideoList = (props) => {
    return(
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;