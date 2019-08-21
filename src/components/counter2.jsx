import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: "15px",
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  /**
   * Whenever object of type class ie Counter created then constructor is called
   */
  /**
   * 
Note:
Fucntions in javascript are object so they have properties and methods
such as bind method
   */
  constructor() {
    super();
    console.log("Constructor  ", this);
    /**
     * Date : 20 August 2019
     * Note:
     * for every class handle events fucntions we need to write the above lines, like add constructor, user super(), then use bind method
     * To not to use these line, just use arrow functions
     * handleIncrement = () =>{} //like this
     */
    this.handleIncrement = this.handleIncrement.bind(this); //this bind methods will return a new instance of handleIncrement method
  }
  handleIncrement() {
    // this.state.count++;
    /**
     * Note : the value of count incremented but react dont know, to make it use this.setState()
     */
    /**
     * We need to tell react exclusively that what is changed, ie why use this.setState()
     */
    this.setState({
      count: this.state.count + 1
    }); /**
    this method tells the react to obtain the state,
    then react figure out what part of state is changed, and
    then on the based on that react will bring the DOM in sync of virtual DOM
    */
    // console.log("event clicked", this.state.count);
    // return  console.log('event clicked')
    // this.state.count =this.state.count+ 1;
  }
  /**
   * function() ---- return the window object
   * in incognito mode function() return undefined
   */
  render() {
    let classes = this.getBadgeClasses();
    // return <h1>Hello World</h1>;
    //return <h1>Hello World</h1><button>Increment</button>;
    //this will not work because babble not know how to deal with long multiple html element,
    //therefore the sollution is to wrap the element in single parent element

    return (
      <div>
        {/* <h1>Hello World</h1>
        {<img src={this.state.imageUrl} alt = ""/>
        <span>{this.state.count}</span> */}
        {/* <span style={{color:'red'}} className="badge badge-primary m-2">{this.formatCount()}</span> */}

        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
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
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // formatCount() {
  //   return this.state.count === 0 ? 'Zero' : this.state.count;
  // }

  formatCount() {
    //Self destructing object
    const { count } = this.state; //picking up the count property from the state object
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
