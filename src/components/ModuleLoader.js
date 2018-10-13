import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Default from './Default'
import Statistics from './Statistics'
import Funny from './Funny'
import Incentives from './Incentives'
import Tips from './Tips'
import Guide from './Guide'
import Transcript from './Transcript'

class ModuleLoader extends Component {
    render() {
        return (
            <div>
                Module Loader
                <Route exact={true} path='/' render={(props) => <Default {...props} title={'Root'} />} />
                <Route exact={true} path='/statistics' render={(props) => <Statistics {...props} title={'Root'} />} />
                <Route exact={true} path='/funny' render={(props) => <Funny {...props} title={'Root'} />} />
                <Route exact={true} path='/incentives' render={(props) => <Incentives {...props} title={'Root'} />} />
                <Route exact={true} path='/tips' render={(props) => <Tips {...props} title={'Root'} />} />
                <Route exact={true} path='/guide' render={(props) => <Guide {...props} title={'Root'} />} />
                <Route exact={true} path='/transcript' render={(props) => <Transcript {...props} title={'Root'} />} />
            </div>
        )
    }
}

export { ModuleLoader };