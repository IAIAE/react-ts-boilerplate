import React from 'react'

class Input extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            text: props.inputText
        }
    }
    setValue(text){
        this.setState({
            text,
        })
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
        this.props.onChange && this.props.onChange(e.target.value)
    }
    static getDerivedStateFromProps(nextProps, prevState){
        return {
            text: nextProps.inputText
        }
    }
    render() {
        return <div>
            <input value={this.state.text} onChange={this.handleChange} />
        </div>
    }
}

export default Input