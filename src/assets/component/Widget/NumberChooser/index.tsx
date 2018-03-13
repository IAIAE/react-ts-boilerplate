import * as React from 'react'

export interface Props{
    label?: string;
    num: number;
    add: (_:any)=>any;
    de: (_:any)=>any;
}

const style = require('./index.scss')


export default class NumberChooser extends React.Component<Props, any>{

    render(){
        let {label} = this.props;
        return <div className={style.root}>
            {label && <div className={style.label}>{label}</div>}
            <div className={style.wrapper}>
                <div className={style.btn} onClick={this.props.de} >-</div>
                <div className={style.num} >{this.props.num}</div>
                <div className={style.btn} onClick={this.props.add} >+</div>
            </div>
        </div>
    }
}