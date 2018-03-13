import {walk, getPath} from 'mobx-state-tree'

/**
 * 这个是用来操作MST树结构的辅助工具库
 * @author IAIAE
 */

export function walkTree(tree, cb){
    if(!tree) return;
    let result = cb(tree);
    if(result){
        tree.descendants && tree.descendants.forEach(node=>{
            walkTree(node, cb);
        })
    }
}

