//Create a new component. This component should produce some HTML

import React, { Component } from 'react';
import ReactDom from 'react-dom';


// API search - YouTubeSearch
import YTSearch from 'youtube-api-search';

//Import React components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube API key
const API_KEY = 'AIzaSyCsxEHAsJDPlQTXVLg70PwuUFzPMOtqAzE';


class App extends Component{
    constructor(props){
        super(props)

        this.state = { videos: [] }

        // takes object ({API-key, searchTerm}, callback);
        // - similar process to AJAX pass(configuration, callback)
        YTSearch({key: API_KEY, term: 'cute cats'}, (videos) => {
            //response data - which is the videos urls from youtube
            this.setState({ videos: videos });
            //es6 - syntax
            //this.setState({ videos });
        });

    }

        render(){
            return (
                <div>
                    <SearchBar/>
                    <VideoDetail video={this.state.videos[0]} />
                    <VideoList videos={this.state.videos}/>
                </div>
                );
            };
}


// //Function Component        
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//         );
// };

//Insert React to the DOM
ReactDom.render(<App />, document.querySelector('.container'));