import React from 'react'

class Input extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            text: props.inputText
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return <div>
            <input value={this.state.text} onChange={this.handleChange} />
        </div>
    }
}

export default Input