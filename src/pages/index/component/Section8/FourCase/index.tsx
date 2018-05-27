import React from 'react'
import Tree from './Tree'
const style = require('./index.scss')
import {observer, inject, Provider} from 'mobx-react'
import data from './data'

@inject('tree')
@observer
class Case extends React.Component<any, any>{
    render(){
        console.info('this.props.tree', this.props.tree)
        return <div>
            <div>使用MST来实现不可变数据结构。达到相同功能，而代码质量明显提升</div>
            <Tree root={this.props.tree.roots}/>
        </div>
    }
}

export default class Foo extends React.Component{
    render(){
        return <Provider tree={data}>
            <Case />
        </Provider>
    }
}