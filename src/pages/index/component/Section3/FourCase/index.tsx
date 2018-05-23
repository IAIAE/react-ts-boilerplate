import React from 'react'
const style =  require('./index.scss'); 

export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            listening: false
        }
    }
    handleClick = () => {
        this.setState(state=>({
            listening: !state.listening
        }))
    }
    render(){
        return <div className={style.btn} onClick={this.handleClick}>
            {this.state.listening?'监听中...':'监听'}
        </div>
    }
}