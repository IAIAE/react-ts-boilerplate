import * as React from 'react'
import Panel from '../../Panel'
import Button from '../../Widget/Button'
import dispatcher from 'utils/dispatcher'
import {ActionType as MaskActionType} from '../../Mask/action'
import {prevent, preventType} from 'utils/decorator/click'

export interface Props{
    text: string;
}
const style = require('./index.scss')

export default class TTT extends React.Component<Props, any>{
    @prevent(preventType.stopPropagation)
    close(e):void{
        dispatcher.dispatch({
            type: MaskActionType.MASK_CLICK_MASK
        })
    }
    render(){
        return <Panel className={style.root} title="提示">
            <div className={style.text}>{this.props.text}</div>
            <Button className={style.btn} text="确定" handleClick={_=>this.close(_)} />
        </Panel>
    }
}