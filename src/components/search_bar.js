"use strict"

// React is required in all out components, as JSX will still require it
import React, { Component } from 'react';


// Class based component 
class SearchBar extends Component {
    // render function
    render(){
        return (
                // note - onChange is the event emitter used by html
                //<input onChange={this.onInputChange}/>
                //<input onChange={(event) => {console.log(event.target.value);}}/> // arrow function
                <input onChange={event => console.log(event.target.value)}/> // cleaner arrow function
            ); // return JSX
    }

    // // Event Handler for input 
    // onInputChange(event){  // event object is always passed by onChange
    //     // When input changes - run this code
    //     console.log(event.target.value); //output = text written within input box
    // }

    
}



//create instance  #for example purpose only
//var instance = new SearchBar();

// Export to allow outside use
export default SearchBar;
