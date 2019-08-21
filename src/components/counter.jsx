import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags:["tag1", "tag2", "tag3"]
  };
  styles = { fontSize: "15px",
  fontWeight: "bold"};

  renderTags() {
    if(this.state.tags.length ===0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag=>(
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
  }
  //function without parameters
  handleIncrement1 = () =>{
    console.log("event clicked", this.state.count);
    this.setState({count : this.state.count+1});
  }

  //function with parameters
  handleIncrement= product =>{
    console.log("event clicked", this.state.count);
    console.log("product argument  ", product);

    this.setState({count : this.state.count+1});
  }
  doHandleIncrement = ()=> {
    this.handleIncrement({id:1})
  }

  render(){
      let classes = this.getBadgeClasses();
    return (
        <div>
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment1</button>
            <button onClick={this.doHandleIncrement}  className="btn btn-secondary btn-sm">Increment2</button>
            <button onClick={ ()=>this.handleIncrement({id:2})}  className="btn btn-secondary btn-sm">Increment3</button>
            
            {this.state.tags.length === 0 && "Please create a new tag"}
            {this.renderTags()}
        </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ===0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount(){
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
export default Counter;