import React from 'react'
import {observer, inject} from 'mobx-react'
const style =  require('./index.scss'); 

@inject('list')
@observer
export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
    }
    handleClick = (e) => {
        this.props.list.fetch();
    }
    render(){
        return <div className={style.btn} onClick={this.handleClick}>
            {this.props.text||'点击我'}
        </div>
    }
}