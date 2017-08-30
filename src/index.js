//Create a new component. This component should produce some HTML

import React, { Component } from 'react';
import ReactDom from 'react-dom';


// API search - youtubesearch
import YTSearch from 'youtube-api-search';

//Import React components
import SearchBar from './components/search_bar';

//youtube API key
const API_KEY = 'AIzaSyCsxEHAsJDPlQTXVLg70PwuUFzPMOtqAzE';


class App extends Component{
    constructor(props){
        super(props)

        this.state = { videos: [] }

        // takes object ({API-key, searchTerm}, callback);
        // - similar process to AJAX pass(configuration, callback)
        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            //response data - which is the videos urls from youtube
            this.setState({ videos: data })
        });

    }

        render(){
            return (
                <div>
                    <SearchBar/>
                </div>
                );
            };
        }


// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//         );
// };

//Insert React to the DOM
//Take this component's generated HTML and put it on the page (in the DOM)

ReactDom.render(<App />, document.querySelector('.container'));