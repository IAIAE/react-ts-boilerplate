import React from 'react'
import {observer, inject} from 'mobx-react'
import {RouterPath} from '../../router'
import OneCase from './OneCase'
import TwoCase from './TwoCase'
import ThreeCase from './ThreeCase'

export interface Props{
    history?: any;  
}

const style = require('./index.scss')

@inject('history')
@observer
export default class Section2 extends React.Component<Props, any>{
    constructor(props){
         super(props)
         this.state = {
             threeValue: null
         }
    }
    toHome = () => {
        this.props.history.push(RouterPath.HOME)
    }
    handleChange = (e, type)=>{
       
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
        </div>
    }
}