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
                <div>下方有一个列表组件，和一个按钮，当我们点击按钮时，会(模仿)ajax远程拉取一条数据，并显示在List组件之中。</div>
                <div>
                    <Button />
                </div>
                <List />
            </div>
        </Provider>
    }
}