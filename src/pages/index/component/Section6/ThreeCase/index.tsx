import React from 'react'
import {types, flow} from 'mobx-state-tree'
import {Provider} from 'mobx-react'
import List from './List'
import Button from './Button'
import json from './mock'
import CatchAble from 'assets/component/CatchAble'
let list = types.model({
    list: types.array(types.model({
        name: types.string,
        score: types.number,
    })),
}).actions(self=>({
    fetch: flow(function*(){
        let data = yield Promise.resolve(json)
        self.list.replace(json)
    })
})).create({
    list: []
})

export default class Case extends React.Component<any, any>{
    render() {
        return <Provider list={list}>
            <div>
                <p>加入一些异常处理办法：如果组件crash掉，显示一种替代方案；或者直接隐藏这个组件也是很好的办法。
                </p>
                <div>
                    <Button />
                </div>
                <CatchAble>
                    <List />
                </CatchAble>
            </div>
        </Provider>
    }
}