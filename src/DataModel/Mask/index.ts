import {types} from 'mobx-state-tree'


export interface Props{
    show: boolean;
    component?: string;
    params?: anyObject
}

// UI 上显示的蒙层
let Mask = types.model('Mask', {
    show: types.boolean,
    component: types.maybe(types.string),
    params: types.frozen
}).actions(self=>({
    
}))

export default Mask