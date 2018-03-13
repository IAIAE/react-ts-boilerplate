'use strict'
import React, { Component } from 'react';
import { clickBehavior, constClickInterval, cbClick } from 'utils/decorator/click'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import {RouterPath} from './router'
import {bindDefaultKeyboard, unBindDefaultKeyboard} from 'utils/tool/keyboard'

// import {checkStatus} from '/assets/utils/sugar'
// import Tree from './data/Tree'
import { inject, observer } from 'mobx-react';
import {Props as UIProps} from './data/ui'

import Hello from './component/Hello'
import Home from './component/Home'

/**
 * 组件
 */

import Mask from 'assets/component/Mask'

const style = require('./index.scss')
export interface Props {
    ui?: UIProps;
    history?: any;
}

@inject('history','ui')
@observer
export default class pageComponent extends Component<Props, any> {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div className={style.rootroot}>
            {this.props.ui.mask.show && <Mask component={this.props.ui.mask.component} data={this.props.ui.mask.params}/>}
            <div className={style.mainPanel}>
                <Router history={this.props.history}>
                    <Switch>
                        <Route exact path={RouterPath.HOME} component={Home}/>
                        <Route exact path={RouterPath.HELLO} component={Hello}/>
                        <Route path='*' exact component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    }
}
