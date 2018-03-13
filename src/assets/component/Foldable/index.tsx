import * as React from 'react'


const style = require('./index.scss')

export interface Props{
    fold?: boolean;
    title?: string; 
}

export default class ControllPanel extends React.Component<Props, any>{
    constructor(props, context){
        super(props, context);

        this.state={
            fold: this.props.fold || false
        }
    }
    componentDidUpdate(prevProps, prevState){
        // if(prevState.fold != this.state.fold){

        // }
    }
    toggle(){
        this.setState(state=>({
            fold: !state.fold
        }))
    }
    render(){
        return <div className={`${style.foldable} ${this.state.fold?style.fold:style.open}`}>
            <div className={style.bar} onDoubleClick={_=>this.toggle()} >
                <div className={`${style.foldbtn}`} onClick={_=>this.toggle()}></div>
                <div className={style.text}>{this.props.title}</div>
            </div>
            <div className={style.container}>{this.props.children}</div>
        </div>
    }
}