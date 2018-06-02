import React from 'react'
const style  = require('./index.scss')

export default class TreeNode extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            open: true,
        }
    }
    handleChange = (e) => {
        if(this.props.node.children){
            this.setState(state=>({
                open: !state.open,
            }))
        }
    }
    render(){
        let {node} = this.props
        return <div className={style.root}>
            <div className={style.infoContainer}>
                <div 
                    className={node.children?(`${style.logo} ${this.state.open?style.open:''}`):style.leaf}
                    onClick={this.handleChange}></div>
                <div className={style.name}>{node.name}</div>
            </div>
            {this.state.open && <div className={style.childrenContainer}>
                {node.children && node.children.map((_, index)=><TreeNode key={index} node={_} />)}
            </div>}
        </div>
    }
}