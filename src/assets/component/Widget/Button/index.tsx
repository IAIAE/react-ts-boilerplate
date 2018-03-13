import * as React from 'react'

const style = require('./index.scss')

export interface Props{
    text: string;
    handleClick: (val: any)=>any;
    style?: anyObject;
    className?: string;
}

export default class Button extends React.Component<Props, any>{

    render(){
        return <div className={`${style.root} ${this.props.className||''}`} style={this.props.style} onClick={this.props.handleClick} >
            {this.props.text}
        </div>
    }
}