import React from 'react'
import {types} from 'mobx-state-tree'
import {Provider} from 'mobx-react'
import Input from './Input'
import Button from './Button'

let input = types.model({
    value: types.string,
}).actions(self=>({
    setValue(val){
        self.value = val;
    }
})) .create({value: 'hello'})
let btn = types.model({
    value: types.string,
}).actions(self=>({
    setValue(val){
        self.value = val;
    }
})).create({value: '点击我'})

export default class Case extends React.Component<any, any>{
    render() {
        return <Provider input={input} btn={btn}>
            <div>
                <div>状态管理：mobx</div>
                <Input />
                <Button />
            </div>
        </Provider>
    }
}