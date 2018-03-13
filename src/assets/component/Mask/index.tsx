import * as React from 'react'
import { observer } from 'mobx-react';
import ReactDOM from 'react-dom'
import * as Dialog from '../Dialog'
import {MouseEvent} from 'react'
import {prevent, preventType} from 'utils/decorator/click'
import dispatcher from 'utils/dispatcher'
import {ActionType} from './action'

export interface Props {
    component: string;
    data: anyObject;
}
const style = require('./index.scss')

@observer
class Mask extends React.Component<Props, any>{
    dom: Element;

    componentDidMount(){
        this.dom = ReactDOM.findDOMNode(this);
    }

    @prevent(preventType.stopPropagation, preventType.preventDefault)
    clickMask(e:MouseEvent<HTMLDivElement>){
        dispatcher.dispatch({
            type: ActionType.MASK_CLICK_MASK
        })
    }

    render(){
        let component = Dialog[this.props.component];
        if(!component){
            component = Dialog.Empty;
        }
        return <div className={style.root} onClick={_=>this.clickMask(_)}>
            {React.createElement(component, {...this.props.data} )}
        </div>
    }
}

export default Mask;