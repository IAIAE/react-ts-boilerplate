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
    handleInput = (e) => {
        this.props.change(this.props.path+this.props.index, e.target.value)
    }
    render(){
        let {node} = this.props
        return <div className={style.root}>
            <div className={style.infoContainer}>
                <div 
                    className={node.children?(`${style.logo} ${this.state.open?style.open:''}`):style.leaf}
                    onClick={this.handleChange}></div>
                {!node.children && <input onChange={this.handleInput} value={node.name} className={style.name} />}
                {node.children && <div className={style.name}>{node.name}</div>}
            </div>
            {this.state.open && <div className={style.childrenContainer}>
                {node.children && node.children.map((_, index)=>
                    <TreeNode 
                        path={this.props.path+this.props.index+'-'} 
                        index={index} 
                        key={index} 
                        node={_} 
                        change={this.props.change} 
                    />)}
            </div>}
        </div>
    }
}