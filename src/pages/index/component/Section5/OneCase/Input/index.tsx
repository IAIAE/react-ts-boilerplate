import React from 'react'
import {connect} from 'react-redux'

class Input extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            text: props.input.value
        }
    }
    shouldComponentUpdate(nextProps){
        return true;
    }
    handleChange = (e) => {
        // this.setState({
        //     text: e.target.value
        // })
        this.props.dispatch({
            type: 'input_change',
            data: e.target.value,
        })
    }
    
    render() {
        return <div>
            <input value={this.props.input.value} onChange={this.handleChange} />
        </div>
    }
}

export default connect(_=>_)(Input)