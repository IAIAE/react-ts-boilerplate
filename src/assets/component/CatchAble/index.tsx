import React from 'react'
const style = require('./index.scss')

export default class CatchAble extends React.Component<any, any>{
    state = {
        fail: false,
    } 
    componentDidCatch(e){
        this.setState({
            fail: e.message
        })  
    }
    render(){
        if(this.state.fail){
            return <div className={style.root}>{this.state.fail}</div>
        }
        return this.props.children;
    }
    
}
