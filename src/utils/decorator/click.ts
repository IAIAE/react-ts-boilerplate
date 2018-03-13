import {decofy} from './helper'


export const clickBehavior = config => (handler, key, target) =>{
    let lastcall = 0,
        isLoading = false,
        interval = config.interval,
        cb = config.cb,
        preventDefault = config.preventDefault
    function finish(){
        isLoading = false;
    }
    return function(){
        if(preventDefault){
            let e = arguments[0]
            e.stopPropagation && e.stopPropagation();
            e.preventDefault && e.preventDefault();
        }
        if(interval){
            if(+new Date - lastcall < interval) return;
            lastcall = +new Date;
            handler.apply(this, arguments);
        }else if(cb){
            if(!isLoading){
                isLoading = true;
                let args = Array.prototype.slice.call(arguments);
                args.push(finish);
                handler.apply(this, args);
            }
        }else{
            handler.apply(this, arguments)
        }
    }
}

export enum preventType{
    stopPropagation = 'STOP',
    preventDefault = 'prevent',
    nativeStop = 'sstop',
}

export const prevent = (...args) => decofy((handler, key, target) => {
    return function(){
        let obj = arguments[0];
        let e;
        if(obj && obj.e && obj.e.type){
            e = obj.e
        }else if(obj.type){
            e = obj;
        }
        if(e){
            // 没有配置的默认情况是即停止冒泡也停止默认操作
            if(args.length == 0){
                e.preventDefault()
                e.stopPropagation();
            }else{
                if(~args.indexOf(preventType.stopPropagation)) e.stopPropagation();
                if(~args.indexOf(preventType.preventDefault)) e.preventDefault();
                if(~args.indexOf(preventType.nativeStop)) e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
            }
        }
       
        let result = handler.apply(this, arguments);
        return result;
    }
})


export const keybind = (...args) => decofy((handler, key, target)=>{
    return function(){
        let obj = arguments[0];
        let e;
        if(obj && obj.e && obj.e.type){
            e = obj.e
        }else if(obj.type){
            e = obj;
        }
        if(e && e.keyCode){
            if(~args.indexOf(e.keyCode)){
                return handler.apply(this, arguments);
            }
        }else{
            return null;
        }
    }
})

export const constClickInterval = decofy(clickBehavior({interval: 500}));
export const cbClick = decofy(clickBehavior({cb: true}));