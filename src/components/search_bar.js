"use strict"

// React is required in all out components, as JSX will still require it
import React, { Component } from 'react';

// Class based component 
class SearchBar extends Component{
    //initialize state 
    constructor(props){ //automatically run when you call SearchBar
        // This is the Constructor for the parent method - Which is Component
        super(props);

        //initialize state - creating state
        this.state = {term: ''};
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
            ); // return JSX
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term);
    }

    // // Event Handler for input 
    // onInputChange(event){  // event object is always passed by onChange
    //     // When input changes - run this code
    //     console.log(event.target.value); //output = text written within input box
    // }

}


// Export to allow outside use
export default SearchBar;
