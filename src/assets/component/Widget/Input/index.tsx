import * as React from 'react'
import { MouseEvent, MouseEventHandler } from 'react';

const style = require('./index.scss')

export interface Props {
    label?: string;
    onBlur?: any;
    onFocus?: any;
    onInput?: any;
    onKeyUp?: any;
    [prop: string]: any;
}


class Input extends React.Component<Props, any>{
    getVal(){
        // @ts-ignore
        return this.refs.text.value;
    }
    focus(){
        // @ts-ignore
        this.refs.text.focus();
    }
    render(){
        let {label, ...rest} = this.props;
        return <div className={style.root}>
            {label!=null && <div className={style.label}>{label}</div>}
            <input type="text" ref="text" className={style.box} {...rest} />
        </div>
    }
}

export default Input