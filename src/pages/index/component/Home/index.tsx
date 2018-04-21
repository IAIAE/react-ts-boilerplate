import React from 'react'
import { observer, inject } from 'mobx-react';
import {RouterPath} from '../../router'
const style = require('./index.scss')

export interface Props{
    history?: any;
}
@inject('history')
@observer
export default class Home extends React.Component<Props, any>{
    toSection(key){
        let path = RouterPath[key];

        console.info(RouterPath, key)
        if(path){
            this.props.history.push(path)
        }else{
            this.props.history.push(RouterPath.HOME)
        }
    }
    render(){
        let sections = [];
        Object.keys(RouterPath).forEach(key=>{
            if(/^SECTION/.test(key)){
                sections.push(key);
            }
        })
        return <div className={style.root}>
            home
            {
                sections.map((_, index)=><div className={style.item} key={index} onClick={e=>this.toSection(_)}>{_}</div>)
            } 
        </div>
    }
}