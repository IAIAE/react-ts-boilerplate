export enum ActionType {
    MUSK_SHOW = 'MASK_SHOW',
    MUSK_HIDE = 'MASK_HIDE',
}

export function showMask(params){
    return {
        type: ActionType.MUSK_SHOW,
        data: params,
    }
}
export function hideMask(params){
    return {
        type: ActionType.MUSK_HIDE,
        data: {}
    }
}