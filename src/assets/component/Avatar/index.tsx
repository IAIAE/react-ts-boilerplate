import * as React from 'react'

const defaultAvatar = require('./image/default-avatar.png')
const style = require('./index.scss')

export interface Props{
    fallback?: string;
    url?: string;
    className?: string;
}

class Avatar extends React.Component<Props, any>{
    img: HTMLImageElement = new Image;
    constructor(props, context){
        super(props, context)
        this.state = {
            ok: false,
            url: defaultAvatar
        }
        this.loadImage();
    }    
    loadImage(){
        this.img.src = this.props.url || defaultAvatar;
        this.img.onload = ()=>{
            // console.info('this.image loaded')
            this.setState({
                ok: true,
                url: this.props.url || defaultAvatar
            })
        };

        this.img.onerror = () => {
            this.setState({
                ok: false,
                url: this.props.fallback || defaultAvatar
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.url != this.props.url){
            this.loadImage();
        }
    }
    render(){
        // console.info('this.state.url', this.state.url)
        return <div className={this.props.className || style.defaultAvatar } style={{
            backgroundImage: `url(${this.state.url})`
        }}></div>
    }
}


export default Avatar;