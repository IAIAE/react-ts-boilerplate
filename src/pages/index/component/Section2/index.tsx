import React from 'react'
import {observer, inject} from 'mobx-react'
import {RouterPath} from '../../router'
import EllipsisText from 'assets/component/Widget/EllipsisText'

export interface Props{
    history?: any;  
}

const style = require('./index.scss')

@inject('history')
@observer
export default class Section2 extends React.Component<Props, any>{
    toHome = () => {
        this.props.history.push(RouterPath.HOME)
    }
    render(){
        return <div className={style.root}>
            <div className="tohome" onClick={this.toHome}>{'<'} 返回home</div>
            <div className="case">
                <div className={style.logo}>logo</div>
                <div className={style.name}>我这么爱你你却牵着别人的手在公园里溜达我一拳怼死你</div>
            </div>
            <div className="case">
                <div className={style.logo}>logo</div>
                <EllipsisText className={style.name}>我这么爱你你却牵着别人的手在公园里溜达我一拳怼死你</EllipsisText>
            </div>
        </div>
    }
}