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
            let newRoot = state.root.slice();
            node.name = newValue;
            return {
                root: newRoot,
            }
        })

        // console.info(path, newValue)
    }
    render(){
        return <div>
            <div>用input框使得每一个节点可以编辑，但是引入了一个问题，如何使得修改的节点单独渲染，而不重绘整个树结构组件？</div>
            <Tree change={this.handleChange} root={this.state.root}/>
        </div>
    }
}