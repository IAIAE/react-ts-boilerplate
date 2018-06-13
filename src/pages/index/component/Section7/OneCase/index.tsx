import React from 'react'
import Button from './Button'
const style = require('./index.scss')
import { toast } from 'react-toastify';
export default class Case extends React.Component<any, any>{

    click(e){
        toast('抢到一张票...')
    }
    render() {
        return <div className={style.root}>
            <p>创建一个按钮，快速地点击它！</p>
            <Button text="抢票" handleClick={_=>this.click(_)} />
        </div>
    }
}