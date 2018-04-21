import React from 'react'
const style = require('./index.scss')

export default function EllipsisText(props){
    let {className, children, ...rest} = props;
    return <div className={`${className} ${style.root}`} {...rest}>{children}</div>
}