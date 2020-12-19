import React,{createContext,PureComponent} from 'react';

const {
    Provider,Consumer
} = createContext();
// 类里的状态 变成我们要改变的数据
class CountProvider extends PureComponent{
    state = {
        count:0
    }   
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement(){

    }
    render(){
        return (
            <Provider value={{
                count:this.state.count,
                increment:this.increment,
                decrement:this.decrement
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CountProvider,
    Consumer
}