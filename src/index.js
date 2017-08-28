//Create a new component. This component should produce some HTML

import React from 'react';
import ReactDom from 'react-dom';

// Using JSX
const App = function() {
    return <div>Hi!</div>;
};

//Insert React to the DOM
//Take this component's generated HTML and put it on the page (in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));