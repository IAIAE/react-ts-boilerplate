import {decofy} from './helper'

export const info = str => decofy(handler=>{
    return function(){
        console.info(str, this);
        return handler.apply(this, arguments)
    }
})