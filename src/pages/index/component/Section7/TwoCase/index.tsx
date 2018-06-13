import React from 'react'
import Button from './Button'
const style = require('./index.scss')
import { toast } from 'react-toastify';
import {constClickInterval} from 'utils/decorator/click'

export default class Case extends React.Component<any, any>{

    @constClickInterval
    click(e){
        toast('抢到一张票...')
    }
    render() {
        return <div className={style.root}>
            <p>我们为点击事件加上一些节流处理，注意观看源码中装饰器的实现</p>
            <Button text="抢票" handleClick={_=>this.click(_)} />
        </div>
    }
}