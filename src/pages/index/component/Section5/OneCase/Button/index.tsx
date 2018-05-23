import React from 'react'
const style =  require('./index.scss'); 
import {connect} from 'react-redux'

class Button extends React.Component<any, any>{
    constructor(props){
        super(props)
        this.state = {
            text: props.text
        }
    }
    handleClick = (e) => {
        this.props.dispatch({
            type: 'btn_click',
        })
    }
    render(){

        return <div className={style.btn} onClick={this.handleClick}>
            {this.props.btn.value||'点击我'}
        </div>
    }
}

export default connect(_=>_)(Button)