import { Component } from "react";
import Child from './Child'
import {CountProvider,Consumer} from '../Count'

export default class App extends Component{
    render(){
        return(
            <CountProvider>
                <Child/>
            </CountProvider>
        )
    }
}