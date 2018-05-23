import React from 'react'

export default class Input extends React.Component<any, any>{
    handleChange = (e) => {
        
    }
    render(){
        return <div>
            <input value={this.props.inputText} onChange={this.handleChange}/>
        </div>
    }
}