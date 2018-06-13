import React from 'react'
const style =  require('./index.scss'); 

export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
    }
    handleClick = (e) => {
        this.props.handleClick && this.props.handleClick(e);
    }
    render(){
        return <div className={style.btn} onClick={this.handleClick}>
            {this.props.text||'点击我'}
        </div>
    }
}