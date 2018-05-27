import React from 'react'
import {observer, inject} from 'mobx-react'
import {RouterPath} from '../../router'
import OneCase from './OneCase'
import TwoCase from './TwoCase'
import ThreeCase from './ThreeCase'
import FourCase from './FourCase'

export interface Props{
    history?: any;  
}

const style = require('./index.scss')

@inject('history')
@observer
export default class Section2 extends React.Component<Props, any>{
    constructor(props){
         super(props)
    }
    toHome = () => {
        this.props.history.push(RouterPath.HOME)
    }
    
    render(){
        return <div className={style.root}>
            <div className="tohome" onClick={this.toHome}>{'<'} 返回home</div>
            <div className="case">
                <OneCase /> 
            </div>
            <div className="case">
                <TwoCase /> 
            </div>
            <div className="case">
                <ThreeCase /> 
            </div>
            <div className="case">
                <FourCase /> 
            </div>
            
        </div>
    }
}