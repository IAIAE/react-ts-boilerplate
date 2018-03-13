import React from 'react'
import {RouterPath} from '../../router'

const style = require('./index.scss')

export interface Props{
    history?: any;
}

export default class Home extends React.Component<Props, any>{
    toHello(e){
        this.props.history.push(RouterPath.HELLO)
    }
    render(){
        return <div className={style.root}>
            home
            <div onClick={e=>this.toHello(e)}>to hello</div>
        </div>
    }
}