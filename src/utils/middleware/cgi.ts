import {Middleware} from 'assets/global/config'
import fetcher from '../fetcher'
import { fail } from 'mobx/lib/utils/utils';



const cgiMiddleware = store => next => async action => {
    if(!action[Middleware.CGI]){
        return next(action);
    }
    // 检查参数:
    if(!action.data.url || !action.data.types){
        console.error('the action call cgi, but no url or types in params, please check it ', action)
        return next(action)
    }
    let types = action.data.types;
    let FETCHING = types[0],
        SUCCESS = types[1],
        FAIL = types[2];
    action.data.types = null;
    let url = action.data.url;
    action.data.url = null;
    let method = action.data.method || 'get';
    method = method.toLowerCase();
    action.data.method = null;

    let res;
    try{
        next({
            type: FETCHING
        });
        // console.info(action.data);
        res = await fetcher[method || 'get'](url, action.data);
        // console.info('the cgi return ', res );
    }catch(e){
        let _t = {
            type: FAIL,
            data: e
        };
        next(_t)
        return _t;
    }
    res = res.data;
    if(res.retCode == 0){
        let _t = {
            type: SUCCESS,
            data: res
        };
        next(_t)
        return _t; 
    }else{
        let _t = {
            type: FAIL,
            data: res
        };
        next(_t)
        return _t;
    }
}

export default cgiMiddleware;