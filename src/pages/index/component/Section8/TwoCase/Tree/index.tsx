import React from 'react'
const style = require('./index.scss');
import TreeNode from '../TreeNode'

export default class Tree extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }
    render() {
        let { root } = this.props
        return <div className={style.root}>
            {root && root.map((node, index) => <TreeNode path="" index={index} change={this.props.change} node={node} key={index} />)}
        </div>
    }
}