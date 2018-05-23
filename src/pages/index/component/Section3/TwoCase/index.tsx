import React from 'react'
const style =  require('./index.scss'); 

export default class Button extends React.Component{
    render(){
        return <div className={style.btn}>
            点击我
        </div>
    }
}