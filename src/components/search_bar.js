"use strict"

// React is required in all out components, as JSX will still require it
import React, { Component } from 'react';


// Class based component 
class SearchBar extends Component {
    // render function
    render(){
        return (
            <input />
        ); // return JSX
    }
}



//create instance  #for example purpose only
//var instance = new SearchBar();

// Export to allow outside use
export default SearchBar;
