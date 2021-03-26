import {Component, useState} from "react";

class App extends Component {
  constructor(){
  super();
  this.state = {age: 31};
}
handleClick =()=> {
  console.log("Button Clicked!");
  let newAge = this.state.age + 1;
  this.setState({age: newAge})
}

render(){
  return(
    <div>
      <h1>Age is {this.state.age}</h1>
      <button onClick={this.handleClick}>Click Me!</button>
      </div>
     );
   }
 }

// function App(){
//   const [state, setState] = useState({age: 20})
//   const handleClick =()=>{
//     let newAge = state.age + 1;
//     setState({age: newAge});
//   }
//   return(
//     <div>
//       <h1>Age is {state.age}</h1>
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   );
// }

export default App