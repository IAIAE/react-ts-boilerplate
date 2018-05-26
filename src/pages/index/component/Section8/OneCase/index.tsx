import React from 'react'
import Tree from './Tree'
const style = require('./index.scss')

export default class Case extends React.Component<any, any>{
    render(){
        return <div>
            <div>先建立一个普通的具有层级结构的组件, 并为其添加简单的样式</div>
            <Tree root={[{
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
            }]}/>
        </div>
    }
}