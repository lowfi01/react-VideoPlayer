//Create a new component. This component should produce some HTML

import React from 'react';
import ReactDom from 'react-dom';

//Import React components
import SearchBar from './components/search_bar';

//youtube API key
const API_KEY = 'AIzaSyCsxEHAsJDPlQTXVLg70PwuUFzPMOtqAzE';

// Using JSX
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
        );
};

//Insert React to the DOM
//Take this component's generated HTML and put it on the page (in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));