import React from 'react'
import Input from './Input'
import Button from './Button'

export default class Case extends React.Component<any, any>{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <p>为了能使Input组件能够输入内容，我们必须持有一份内部的数据状态(state)，并且每当props改变时候，state需要同步props改变。修改一下代码，input框终于可以输入了</p>
            <Input inputText={'hello'} />
            <Button text="点击我" />
        </div>
    }
}