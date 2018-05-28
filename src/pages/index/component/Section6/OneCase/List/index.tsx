import React from 'react'
import {observer, inject} from 'mobx-react'

const style = require('./index.scss')

@inject('list')
@observer
export default class List extends React.Component<any, any>{
    constructor(props){
         super(props)
    }
    handleChange = (e, type)=>{
       
    }
    render(){
        let list = this.props.list.list;
        return <div className={style.root}>
            {list.map((item, index)=><div className={style.item} key={index}>
                <div className={style.logo}></div>
                <div className={style.name}>{item.name}</div>
                <div className={style.score}>{item.score}</div>
            </div>)}
        </div>
    }
}