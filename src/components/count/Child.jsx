import { Component } from "react";
import {Consumer} from '../Count'
import Childhood from './Childhood'

export default class Child extends Component{
    render(){
        return(
            <div>
                <Childhood/>
                <Consumer>
                    {
                        ({count,increment})=>{
                            return (
                                <>
                                    <div>{count}</div>
                                    <button onClick={increment}> +</button>
                                </>
                            )
                        }
                    }
                </Consumer>
            </div>
        )
    }
}