import * as React from 'react'
import Tap, {btnStyle} from '../Tap'

export interface Props{
    label?: string;
    taps: string[];
    handleClick?: (e:string)=>void;
}
const style = require('./index.scss')

export default class LabelChooser extends React.Component<Props, any>{
    render(){
        return <div className={style.root}>
            {this.props.label && <div className={style.label}>{this.props.label}：</div>}
            <div className={style.container}>
                {this.props.taps.map((item, index)=><Tap label={item} key={index} useBtn={true} handleClick={this.props.handleClick} btnStyle={btnStyle.add} />)}
            </div>
        </div>
    }
}