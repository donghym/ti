import React,{Component} from 'react'

const hoc = (Comp)=>{
    return class extends Component{
        render (){
            return (
               <Comp color="red" {...this.props}/>
            )
        }
        componentDidMount(){
            console.log(this)
        }
    }
    
}

export default hoc