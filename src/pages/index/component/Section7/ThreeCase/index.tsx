import React from 'react'
import Button from './Button'
const style = require('./index.scss')
import { toast } from 'react-toastify';
import {info} from 'utils/decorator/log'
import {constClickInterval} from 'utils/decorator/click'

export default class Case extends React.Component<any, any>{

    @constClickInterval
    @info('点击事件：')
    click(e){
        toast('抢到一张票...')
    }
    render() {
        return <div className={style.root}>
            <p>用一个info装饰器实现AOP编程，打开开发者工具看看log信息吧~</p>
            <Button text="抢票" handleClick={_=>this.click(_)} />
        </div>
    }
}