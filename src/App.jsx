import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
// import Child from "./components/child";
// import APP2 from "./components/count/APP";
import APP2 from "./components/11-hoc/APP";

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render (){
    return (
      <div className="App">
        <APP2 msg={'dhy'}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    )
  }
  
}

