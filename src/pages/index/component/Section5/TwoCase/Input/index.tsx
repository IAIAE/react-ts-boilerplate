import React from 'react'
import {inject, observer} from 'mobx-react'

@inject('input', 'btn')
@observer
export default class Input extends React.Component<any, any>{
    shouldComponentUpdate(nextProps){
        return true;
    }
    handleChange = (e) => {
        let val = e.target.value;
        this.props.btn.setValue(val)
        this.props.input.setValue(val)
    }
    
    render() {
        return <div>
            <input value={this.props.input.value} onChange={this.handleChange} />
        </div>
    }
}
