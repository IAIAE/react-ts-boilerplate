import * as React from 'react'
import { MouseEvent, CSSProperties } from 'react';
import {prevent, preventType} from 'utils/decorator/click'
import dispatcher from 'utils/dispatcher'
import {ActionType as MaskActionType} from '../Mask/action'

const style = require('./index.scss')

export interface Props{
    onClose?: (e: MouseEvent<HTMLDivElement>)=>void;
    title?: string;
    className: string; 
}

export default class Panel extends React.Component<Props, any>{
    @prevent(preventType.stopPropagation, preventType.preventDefault)
    close(e: MouseEvent<HTMLDivElement>){
        if(this.props.onClose){
            return this.props.onClose(e);
        }
        dispatcher.dispatch({
            type: MaskActionType.MASK_CLICK_MASK
        })
    }


    @prevent(preventType.stopPropagation, preventType.preventDefault)
    prevent(e){
        // nothing just prevent
    }
    render(){
        return <div className={`${style.root} ${this.props.className}`} onClick={_=>this.prevent(_)}>
            <div className={style.bar}>
                {this.props.title!=null && <div className={style.title}>{this.props.title}</div>}
                <div className={`${style.closebtn}`} onClick={_=>this.close(_)}></div>
            </div>
            <div className={style.container}>{this.props.children}</div>
        </div>
    }
}