import React from 'react'
import {observer, inject} from 'mobx-react'
import {RouterPath} from '../../router'
import EllipsisText from 'assets/component/Widget/EllipsisText'
import OneCase from './TwoCase'
import TwoCase from './TwoCase'

export interface Props{
    history?: any;  
}

const style = require('./index.scss')

@inject('history')
@observer
export default class Section2 extends React.Component<Props, any>{
    toHome = () => {
        this.props.history.push(RouterPath.HOME)
    }
    render(){
        return <div className={style.root}>
            <div className="tohome" onClick={this.toHome}>{'<'} 返回home</div>
            <div className="case">
                <div>没有添加样式的按钮：</div>
                <OneCase />
            </div> 
            <div className="case">
                <div>添加样式的之后：</div>
                <OneCase />
            </div> 
        </div>
    }
}