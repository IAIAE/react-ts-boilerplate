
/**
 * 需要三个参数，
 * handler是修饰的方法
 */
declare interface HanlderFunc{
    <T extends Function>(handler:T, key?: string|symbol, target?:Object): Function;
}

interface DiscriptorHasInit<T> extends TypedPropertyDescriptor<T>{
    initializer?: (arg: any) => Function;
}

declare type BabelMethodDecorator = <T extends Function>(target: Object, propertyKey: string | symbol, descriptor: DiscriptorHasInit<T>) => DiscriptorHasInit<T> | void;

export const decofy = (func:HanlderFunc) => {

    let foo:BabelMethodDecorator = (target, key, descriptor)=>{
        let method = descriptor.value || descriptor.initializer;
        if(typeof method !== 'function'){
            console.warn('cannot put none-function decorator on '+<string>key)
            return descriptor;
        }
        let value;
        if(descriptor.value){
            value = func(descriptor.value, key, target);
            descriptor.value = value;
        }else if(descriptor.initializer){
            let _value = func(descriptor.initializer.call(target), key, target)
            value = function(){
                let context = this;
                return function(){
                    _value.apply(context, arguments)
                }
            }
            descriptor.initializer = value;
        }
        return descriptor
    }

    return foo;
    
}