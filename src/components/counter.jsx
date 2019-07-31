import React, { Component } from "react";
class Counter extends Component {
  // state = {}
  render() {
    // return <h1>Hello World</h1>;
    //return <h1>Hello World</h1><button>Increment</button>;
    //this will not work because babble not know how to deal with long multiple html element,
    //therefore the sollution is to wrap the element in single parent element

    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
    ); //== React.createElement('div)
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
