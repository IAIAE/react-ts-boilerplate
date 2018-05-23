import React from 'react'
const style =  require('./index.scss'); 
import {inject, observer} from 'mobx-react'

@inject('btn', 'input')
@observer
export default class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
    }
    handleClick = (e) => {
        this.props.input.setValue('hello')
        this.props.btn.setValue('点击我')
    }
    render(){
        return <div className={style.btn} onClick={this.handleClick}>
            {this.props.btn.value||'点击我'}
        </div>
    }
}
