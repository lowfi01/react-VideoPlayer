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

        this.state = { 
            videos: [],
            selectedVideo: null
        }

        // Default value for search is still important
        this.videoSearch('cute cats');   

    }

        videoSearch(SearchTerm){
             // takes object ({API-key, searchTerm}, callback);
        // - similar process to AJAX pass(configuration, callback)
        YTSearch({key: API_KEY, term: SearchTerm}, (videos) => {
            //Search for video & Update state, then set selectedVideo to the first Video in array
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
        }

        render(){
            return (
                <div>
                    <SearchBar onSearchTermChange={term => this.videoSearch({term})}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={callBackVideo => this.setState({selectedVideo:callBackVideo})}
                        videos={this.state.videos}/>
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