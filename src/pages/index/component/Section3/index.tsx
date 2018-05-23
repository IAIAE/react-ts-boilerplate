import React from 'react'
import {observer, inject} from 'mobx-react'
import {RouterPath} from '../../router'
import EllipsisText from 'assets/component/Widget/EllipsisText'
import OneCase from './OneCase'
import TwoCase from './TwoCase'
import ThreeCase from './ThreeCase'
import FourCase from './FourCase'

export interface Props{
    history?: any;  
}

const style = require('./index.scss')

@inject('history')
@observer
export default class Section2 extends React.Component<Props, any>{
    constructor(props){
         super(props)
         this.state = {
             threeValue: null
         }
    }
    toHome = () => {
        this.props.history.push(RouterPath.HOME)
    }
    handleChange = (e, type)=>{
        if(type == 'three'){
            this.setState({
                threeValue: e.target.value,
            })
        }
    } 
    render(){
        return <div className={style.root}>
            <div className="tohome" onClick={this.toHome}>{'<'} 返回home</div>
            <div className="case">
                <div>没有添加样式的按钮：</div>
                <OneCase />
            </div> 
            <div className="case">
                <div>添加样式的之后：</div>
                <TwoCase />
            </div> 
            <div className="case">
                <div>再给组件添加一些状态变化（通过props）：从外部改变按钮的显示文案</div>
                <input type="text" onChange={_=>this.handleChange(_, 'three')} value={this.state.threeValue||''}/>
                <ThreeCase text={this.state.threeValue}/>
            </div>
            <div className="case">
                <div>从内部给组件添加一些状态变化（通过state），两种状态切换</div> 
                <FourCase />
            </div>
            <div className='case'>
                <div>现在你已经了解了所有开发React组件的基础，恭喜。</div>
            </div>
        </div>
    }
}