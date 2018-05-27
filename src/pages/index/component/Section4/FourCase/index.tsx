import React from 'react'
import Input from './Input'
import Button from './Button'

export default class Case extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            inputText: 'hello',
            buttonText: '点击我',
        }
    }
    handleClick = (e) => {
        // @ts-ignore
        this.refs.input.setText('hello')
        // @ts-ignore
        this.refs.button.setText('点击我')
    }
    inputChange = (text) => {
        // @ts-ignore
        this.refs.button.setText(text)
    }
    render(){
        return <div>
            <p>现在加入组件通信：方法2，所有方法都交给父组件监听，父组件通过refs调用子组件修改子组件的状态：</p>
            <Input inputText={'hello'} ref="input" onChange={this.inputChange}/>
            <Button ref="button" text={'点击我'} handleCick={this.handleClick}/>
        </div>
    }
}