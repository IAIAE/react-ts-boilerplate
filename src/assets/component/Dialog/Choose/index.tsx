import * as React from 'react'
import Panel from '../../Panel'
import Button from '../../Widget/Button'
import {prevent, preventType} from 'utils/decorator/click'
import {ActionType as MaskActionType} from '../../Mask/action'
import {MouseEvent, KeyboardEvent} from 'react'
import dispatcher from 'utils/dispatcher'


const style = require('./index.scss')

export interface Props{
    text: string;
    onSubmit:(e: MouseEvent<HTMLDivElement>)=>void;
}

export default class Choose extends React.Component<Props, any>{
    @prevent(preventType.stopPropagation)
    onClose(e: MouseEvent<HTMLDivElement>):void{
        dispatcher.dispatch({
            type: MaskActionType.MASK_CLICK_MASK
        })
    }

    
    render(){
        return <Panel className={style.root} title="提示" >
            <div className={style.text}>{this.props.text}</div>
            <Button className={style.btn} text="取消" handleClick={_=>this.onClose(_)} />
            <Button className={style.btn} text="确定" handleClick={this.props.onSubmit} />

        </Panel>
    }
}