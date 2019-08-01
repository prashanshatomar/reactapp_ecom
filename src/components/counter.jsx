import React, { Component } from "react";
class Counter extends Component {
  state = {
    count:0
  }
  render() {
    // return <h1>Hello World</h1>;
    //return <h1>Hello World</h1><button>Increment</button>;
    //this will not work because babble not know how to deal with long multiple html element,
    //therefore the sollution is to wrap the element in single parent element

    return (
      <div>
        <h1>Hello World</h1>
        <span>{this.state.count}</span>
        <span>{this.formatCount()}</span>

        <button>Increment</button>
      </div>
    ); //== React.createElement('div)    
    /**Sometimes we do not wnated to use extra div just to bind the html elements into single element,
    In that case we use React.Fragment
    Therefore we use
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
    //in place of
     
    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
    );      
    */
   

  }
  // formatCount() {
  //   return this.state.count === 0 ? 'Zero' : this.state.count;
  // }
  
  formatCount() {
    //Self destructing object
    const { count } =this.state; //picking up the count property from the state object
    // return count === 0 ? 'Zero' : count;
    return count === 0 ? <h1>Zero</h1> : count;

  }

}

export default Counter;

// can ue also this export syntax, direct export the class

// export default class Counter extends Component {
//     // state = {}
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }
