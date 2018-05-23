import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Input from './Input'
import Button from './Button'

let store = createStore(combineReducers({
    input: (state = {value: 'hello'}, action)=>{
        if(action.type == 'btn_click'){
            return {value: 'hello'} 
        }else if(action.type == 'input_change'){
            return {value: action.data}
        }
        return state;
    },
    btn: (state = {value: '点击我'}, action)=>{
        if(action.type == 'btn_click'){
            return {value: '点击我'}
        }else if(action.type == 'input_change'){
            return {value: action.data}
        }else{
            return state;
        }
    }
}))

export default class Case extends React.Component<any, any>{
    render() {
        return <Provider store={store}>
            <div>
                <div>状态管理：redux</div>
                <Input />
                <Button />
            </div>
        </Provider>
    }
}