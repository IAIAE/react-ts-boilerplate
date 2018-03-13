import * as React from 'react'

export enum btnStyle{
    delete = 'delete',
    add = 'add'
}

export interface Props{
    label: string;
    useBtn?: boolean;
    handleClick?: (e:any)=>any;
    btnStyle?: btnStyle
}
const style = require('./index.scss')

export default class Tap extends React.Component<Props, any>{
    tapClick = () => {
        this.props.handleClick(this.props.label)
    }
    render(){
        return <div className={style.root} onDoubleClick={this.tapClick} >
            <div className={style.label}>{this.props.label}</div>
            {this.props.useBtn && 
                <div 
                    className={`${style.btn} ${this.props.btnStyle || btnStyle.delete}`} 
                    onClick={this.tapClick}>
                </div>
            }
        </div>
    }
}