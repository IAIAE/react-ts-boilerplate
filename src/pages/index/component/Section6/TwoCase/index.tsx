import React from 'react'
import {types, flow} from 'mobx-state-tree'
import {Provider} from 'mobx-react'
import List from './List'
import Button from './Button'
import json from './mock'

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
                <p>然鹅，远程ajax拉取的数据很不稳定，我们不能确定返回的对象哪些字段存在，哪些字段不存在，在没有数据校验的情况下，列表组件的渲染很容易发生异常。
                </p>
                <p>点击按钮，如果组件渲染异常了，页面会怎样？不要抱怨，这个例子的异常是我有意而为之。
                </p>
                <div>
                    <Button />
                </div>
                <List />
                <p>一个组件渲染异常造成整个页面crash掉了，一个悲伤的故事，不是么？</p>
            </div>
        </Provider>
    }
}