import { Component } from "react";
import {Consumer} from '../Count'
export default class ChildHood extends Component{
    render(){
        return(
            <>
            <Consumer>
                {({count})=>{
                    return <div>{count}</div>
                }}
            </Consumer>
            <div>childhood</div>
            </>
        )
    }
}