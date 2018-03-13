import { identifier } from "mobx-state-tree/dist/internal";
import EventEmitter from 'wolfy87-eventemitter'
/**
 * 最好一个页面保持一个ws连接就够了。不同的监听通过type下发
 */
export interface ConfigProps {
    url: string;
}

export interface WsListener{
    (data: any):void;
}

export interface Props extends EventEmitter {
    ws: WebSocket;
    listeners: WsListener[];
    init: ()=>void;
    config: (conf: ConfigProps)=>void;
}
class WS extends EventEmitter {
    _config: ConfigProps;
    ws: WebSocket;
    listeners: WsListener[];

    constructor(config) {
        super();
        this._config = config;
    }
    config(config){
        Object.assign(this._config, config)
    }
    init() {
        let _config = this._config;
        let ws = this.ws = new WebSocket(_config.url)

        ws.addEventListener('open', (evt:any) => {
            this.emit('open', evt);
        })

        ws.addEventListener('message', e => {
            //todo: blob support.
            let data;
            try {
                data = JSON.parse(e.data);
            } catch (e) {
                data = {
                    type: 'error',
                    data: data
                };
            }
            // console.info('data', data)
            this.emit(data.type, data.data);
        })

        ws.addEventListener('close', e => {
            this.emit('close', e);
        })

        ws.addEventListener('error', e => {
            this.emit('error', e);
        })
    }
}


export default WS;