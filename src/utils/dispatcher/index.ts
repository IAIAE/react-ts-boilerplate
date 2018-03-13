import { getSnapshot } from "mobx-state-tree";

/**
 * 我们知道mobx的数据层需要一个controller来管理数据的改变，如果用一个很大的controller来负责改变store，那么这个controller势必非常大。工程大了，就势必很难管理。
 * 为了解耦这块儿的逻辑，我们引入和redux中相同的数据分发逻辑。视图层的操作递交事件给dispatcher，dispatcher负责把这个事件分发给每个datamodel，每个datamodel各取所需改变自己的数据内容。这和redux中的dispatch是一样的。
 * 那为什么不直接用redux呢？因为我们想用mobx在更新视图层方面卓越的性能，必须用mobx，而数据更新模式采用“事件分发”的方式。两者并不冲突。
 */
class Dispatcher{
    static of = function(store?: anyObject): Dispatcher{
        return new Dispatcher(store);
    }
    _store: anyObject;
    _snapCache: anyObject;
    /**
     * 实例化的时候可以不传store。但是调用dispatch方法之前确保dispatcher.init(store)
     * @param {Object} store 
     */
    constructor(store){
        this._store = store;
        this.dispatch = this.dispatch.bind(this);
        this._snapCache = null;
    }
    /**
     * 初始化当前页面的store
     * @param {Object} store 
     */
    init(store){
        this._store = store;
    }
    addStore(name:string, store: anyObject){
        if(this._store){
            if(this._store[name]){
                console.warn(`[Mobx Dispatcher]:: depreciate!! addStore ${name} already exist on store. please check it`);
                return;
            }else{
                this._store[name] = store;
            }
        }else{
            this._store = {
                [name]: store
            }
        }
    }
    removeStore(name){
        if(this._store){
            this._store[name] = null; 
        }
    }
    /**
     * 获取当前state。在mobx架构中，这个方法返回的是传给Provider的store的一个snapshot
     */
    getState(){
        let keys = Object.keys(this._store)
        let dirty = true;
        if(this._snapCache){
            dirty = keys.some(key=>{
                return this._snapCache[key] !== getSnapshot(this._store[key])
            })
        }
        if(dirty){
            let obj = {};
            keys.forEach(key=>{
                obj[key] = getSnapshot(this._store[key])
            });
            this._snapCache = obj;
        }
        return this._snapCache;
    }
    /**
     * 这里比较难解，我们并不想一个dispatcher拥有订阅的能力。但是redux原生的store拥有subscribe的方法。如果中间件有用到这个方法就比较伤。
     * 解决办法是：这个也是不推荐的，为了使中间件不报错而已，这是一个空方法
     * @param {Function} listener
     */
    subscribe(listener){
        console.warn('[Mobx Dispatcher]:: depreciate! donot subscribe in a middleware!!!! not support!!')
    }
    /**
     * 这个也是不推荐的，为了使中间件不报错而已，这是一个空方法
     * @param {Function} nextReducer 
     */
    replaceReducer(nextReducer){
        console.warn('[Mobx Dispatcher]:: depreciate! donot replaceReducer in a middleware!!!! not support!!') 
    }
    setMiddleware(...args){
        if(!args.length) return;
        let _args = args.reverse();

        let dispatch = this.dispatch;
        for(let i=0; i<_args.length;i++){
            dispatch = _args[i](this)(dispatch);
        }
        this.dispatch = dispatch;
    }
    /**
     * dispatch 之前确保store已经指定。可以用dispatcher.init(store)指定store
     * @param {Object} action a reducer action. same like redux
     */
    dispatch(action): any{
        if(!this._store){
            console.warn('you dispatch a action to store, but no store injected there');
            return;
        }
        let keys = Object.keys(this._store)
        keys.forEach(key=>{
            let item = this._store[key];
            if(item && item.reducer){
                item.reducer(action);
            }
        });
    }
}

export default Dispatcher.of();

