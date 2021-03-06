import React from 'react'
import { observer, inject } from 'mobx-react';
import {RouterPath} from '../../router'
import Dispatcher from 'utils/dispatcher'
import {showMask} from '../../action/mask'

const style = require('./index.scss')

export interface Props{
    str: string;
    history?: any;
}

@inject('history')
@observer
export default class Hello extends React.Component<Props, any>{

    toHome(e){
        this.props.history.push(RouterPath.HOME)
    }
    showMask(e){
        Dispatcher.dispatch(showMask({
            text: 'hello world'
        }))
    } 
    render(){
        return <div className={style.root}>
            hello {this.props.str}
            <div onClick={e=>this.toHome(e)}>to home</div>
            <div onClick={e=>this.showMask(e)}>show mask</div>
        </div>
    }
}