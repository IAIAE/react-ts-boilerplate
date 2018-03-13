import {decofy} from './helper'

var foo = function<T>(handler: T, key, target){
    return function(){

    };
}

export const keybind = (...args:string[]) => decofy((handler, key, target)=>{
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

export const throttle = (delay) => decofy((handler, key, target) => (() => {
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            handler.apply(this, args);
        }, delay);
    }
})())


