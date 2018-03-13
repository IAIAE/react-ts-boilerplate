import {types, getSnapshot} from 'mobx-state-tree'
import Mask, {Props as MaskProps} from 'DataModel/Mask'
import {ActionType as MaskActionType} from '../action/mask'

export interface Props{
    mask: MaskProps;
}

let UI = types.model({
    mask: Mask,
}).actions(self=>({
    reducer(action: ActionLike){
        // console.info('reducer in ui ', action)
       if(action.type == MaskActionType.MUSK_SHOW){
            self.mask.params = action.data
            self.mask.component = 'Alert'
            self.mask.show = true; 
        }else if(action.type == MaskActionType.MUSK_HIDE){
            self.mask.params = null;
            self.mask.component = null
            self.mask.show = false;
        }
    }
}))

// type tt = typeof UserInfo.Type;
// export interface Props extends tt{};

let ins = UI.create({
    mask: {
        show: false
    },
})

export default ins;