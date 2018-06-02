import React from 'react'
const style = require('./index.scss');
import TreeNode from '../TreeNode'
import {observer, inject} from 'mobx-react'

@observer
export default class Tree extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps){
        return this.props.root !== nextProps.root
    }
    render() {
        let { root } = this.props
        return <div className={style.root}>
            {root && root.map((node, index) => <TreeNode node={node} key={index} />)}
        </div>
    }
}