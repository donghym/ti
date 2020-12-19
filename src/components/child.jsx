import { PureComponent } from "react";
import { Provider,Consumer,testContenxt } from "../context";
class ChildA extends PureComponent{
    static contextType = testContenxt
    render(){
        console.log(this)
        return (
        <div>
            <div>ChildA</div>
        </div>
        )
    }
}
class ChildB extends PureComponent{
    render(){
        return (
        <ChildC/>
        )
    }
}
const ChildC = function(props){
    return (
        <div>
            <ChildD/>
        </div>
    )
}
// 函数 式组件
const ChildD = function(props){
    return (
        <>
            {
                <Consumer>
                    {
                        (value)=>{
                            return <div>childD---{value}</div>
                        }
                    }
                </Consumer>
            }
        </>
    )
}

export default class Child extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }
    render(){
        return (
            <Provider value={this.state.color}>   
                <ChildA/>
                <ChildB/>
            </Provider>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                color:'blue'
            })
        }, 3000);
    }
}
