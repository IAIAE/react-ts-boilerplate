import mousetrap from 'mousetrap'
import Dispatcher from 'utils/dispatcher'
// import {chromeClose} from 'pages/index/action/chrome'

export function bindDefaultKeyboard(){
    // mousetrap.bind(['command+w', 'ctrl+w'], (e)=>{
        // })
    // window.onbeforeunload = function(e){
    //     // Dispatcher.dispatch(chromeClose({e}))
    //     e.preventDefault();
    //     return '确认关闭应用？';
    // }
}

export function unBindDefaultKeyboard(){
    // mousetrap.unbind('command+w')
    // mousetrap.unbind('ctrl+w')
    // window.onbeforeunload = null;
}