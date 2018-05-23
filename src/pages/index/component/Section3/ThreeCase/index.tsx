import React from 'react'
const style =  require('./index.scss'); 

export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            listening: false
        }
    }
    render(){
        return <div className={style.btn}>
            {this.props.text||'change it'}
        </div>
    }
}