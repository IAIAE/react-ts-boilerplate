import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as React from 'react'
import Dispatcher from 'utils/dispatcher'
import cgi from 'utils/middleware/cgi'
import createHistory from 'history/createBrowserHistory'

const history = createHistory(); 

// data
import ui from './data/ui'

// mobx use strict, cannot change data without action
useStrict(true)

let store = {
    ui,
}

Dispatcher.init(store);
Dispatcher.setMiddleware(cgi)

ReactDOM.render(
    <Provider {...store} history={history}>
        <App />
    </Provider>,
    document.getElementById('root')
)
