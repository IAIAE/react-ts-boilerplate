import React from 'react'
import Tree from './Tree'
const style = require('./index.scss')

export default class Case extends React.Component<any, any>{
    state = {
        root: [{
            name: '人物',
            children: [{
                name: 'me.png'
            }]
        },{
            name: '风景',
            children: [ {
                name: '翡冷翠.png',
            }, {
                name: '历史',
                children: [{
                    name: '科隆大教堂.png'
                }, {
                    name: '鲁昂大教堂.png'
                }]
            }, {
                name: '巨人之舌.png'
            }]
        }]
    }
    handleChange = (path, newValue) => {
        this.setState(state=>{
            let _path = path.split('-')
            let node = _path.reduce((seed, current)=>{
                return seed.children[current]
            }, {children: state.root})
            let newRoot = state.root
            node.name = newValue;
            return {
                root: newRoot,
            }
        })

        // console.info(path, newValue)
    }
    render(){
        return <div>
            <div>当props没有改变时，组件无法重绘。这是可变数据结构的缺点。</div>
            <Tree change={this.handleChange} root={this.state.root}/>
        </div>
    }
}