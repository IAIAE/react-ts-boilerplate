import React from 'react'

const style = require('./index.scss')

export interface Props{

}

export default class Foo extends React.Component<Props, any>{
    _msgArr = [];
    constructor(props){
        super(props)
        this.state = {
            msgArr: [],
        }
        this._msgArr.push('constructor')
    }
    componentWillMount(){
        this._msgArr.push('componentWillMount ==> try to get the dom node::'+document.getElementById('caseone-root-node'))
        this._msgArr.push()
    }
    componentDidMount(){
        this._msgArr.push('componentDidMount ==> try to get the dom node::'+document.getElementById('caseone-root-node'))
        this.setState({
            msgArr: this._msgArr.slice()
        })
    }
    render(){
        this._msgArr.push('render')
        return <div className={style.root} id="caseone-root-node">
            显示组件初始化时的生命周期函数调用：
            <div className={style.displayWindow}>
                {this.state.msgArr.length>0 && this.state.msgArr.map((_, index)=><p key={index}>{(index+1) +'：'+ _}</p>)} 
            </div>
        </div>
    }
}