import React from 'react'
import Input from './Input'
import Button from './Button'

export default class Case extends React.Component<any, any>{
    render(){
        return <div>
            <p>我们先创建一个input框，然后下方创建一个按钮，两个组件相互独立。hello和"点击我"都是父组件通过props传入的。</p>
            <Input inputText={'hello'} />
            <Button text="点击我" />
        </div>
    }
}