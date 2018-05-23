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

import Home from './component/Home'
import Section2 from './component/Section2'
import NotFound from './component/NotFound'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Section5 from './component/Section5'

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
                        <Route exact path={RouterPath.SECTION2} component={Section2}/>
                        <Route exact path={RouterPath.SECTION3} component={Section3}/>
                        <Route exact path={RouterPath.SECTION4} component={Section4}/>
                        <Route exact path={RouterPath.SECTION5} component={Section5}/>
                        <Route path='*' exact component={NotFound} />
                    </Switch>
                </Router>
            </div>
        </div>
    }
}
