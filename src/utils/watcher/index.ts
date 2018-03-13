import { onPatch } from "mobx-state-tree";

export interface ListenerType{
    filter?: any;
    func: Function;
    name: string;
}

class Watcher{
    listeners: ListenerType[];

    constructor(){
        this.listeners = [];
    }
    watch(store){
        let keys = Object.keys(store)
        keys.forEach(key=>{
            let item = store[key]
            onPatch(item, (patch)=>{
                this.listeners.forEach(item=>{
                    if(item.filter){
                        item.filter(key, patch) && item.func(key, patch);
                    }else{
                        item.func(key, patch);
                    }
                })
            })
        })
        return this;
    }
    addListener(config){
        if(!config.name || !config.func){
            console.warn('=======a watcher listener MUST have a name and a func!!=====')
            return;
        }
        this.listeners.push(config)
        return this;
    }
    removeListener(name){
        this.listeners = this.listeners.filter(item=>item.name!=name);
        return this;
    }
}

export default Watcher