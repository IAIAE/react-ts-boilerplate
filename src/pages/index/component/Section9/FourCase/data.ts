import {types} from 'mobx-state-tree'

let TreeNode = types.model('TreeNode',{
    name: types.string,
    children: types.maybe(types.array(types.late(()=>TreeNode)))
}).actions(self=>({
    setName(val){
        self.name = val;
    }
}))
let Tree = types.model({
    roots: types.array(TreeNode)
})

export default Tree.create({
    roots: [{
        name: '人物',
        children: [{
            name: 'me.png'
        }]
    },{
        name: '风景',
        children: [ {
            name: '翡冷翠.png',
        }, {
            name: '历史',
            children: [{
                name: '科隆大教堂.png'
            }, {
                name: '鲁昂大教堂.png'
            }]
        }, {
            name: '巨人之舌.png'
        }]
    }]
})