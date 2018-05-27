import React from 'react'
const style =  require('./index.scss'); 

export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            text: props.text
        }
    }
    setText(text){
        this.setState({
            text,
        })
    }
    render(){
        return <div className={style.btn} onClick={this.props.handleCick}>
            {this.state.text||'点击我'}
        </div>
    }
}