import { Component } from "react";
import Hoc from './hoc'
// 装饰器
@Hoc
class APP extends Component{
    render(){
        return(
            <>
            hello ---
            {this.props.color}
            </>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}
export default APP