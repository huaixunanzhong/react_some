import React,{Component} from "react";
import Hello from "./components/Hello";
import Welcom from "./components/Welcom";

class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcom/>
            </div>
        )
    }
}

export default App