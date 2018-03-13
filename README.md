# usage
开发的话，开两个终端，一个启动前端devserver，一个启动后台的server。
进入对应目录，npm start就好。
```
cd web
npm i && npm start


cd server 
npm i && npm start
```


# important!!! 开发需要注意的事项

前端工程利用mobx开发，其中mobx-state-tree有一种非监控的类型`types.frozen`。当将一个非frozen对象赋值给了frozen对象的时候，mobx会将这个对象的configurable设置为false。也就产生了一个bug，如果这个非frozen对象被销毁的时候，会将这个对象设置新的get方法，由于configurable设置为false了，重设get方法就会报错。

约定好，不要讲mobx对象在action间传递，需要将mobx对象转换为简单js对象再dispatch：
```javascript
dispatcher.dispatch({
    type: 'test',
    data: getSnapshot(this.props.node)   //node是个mobx对象
})
```
