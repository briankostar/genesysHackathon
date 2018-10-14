import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Default from './Default'
import Statistics from './Statistics'
import Funny from './Funny'
import Incentives from './Incentives'
import Tips from './Tips'
import Guide from './Guide'
import Transcript from './Transcript'

class ModuleLoader extends Component {
    constructor(props) {
        super(props)
        this.state = { agentStatus: 'READY' }
    }

    initializeWebPage = () => {
        // Subscribe to Workspace Web Edition
        console.log('initializeWebPage', window.genesys.wwe.service)
        // window.genesys.wwe.service.subscribe(["agent", "interaction", "media", "system", "markdone"], this.eventHandler, this);
        window.genesys.wwe.service.subscribe(["agent", "interaction", "media", "system", "markdone"], this.handleAgentEvent, this);
        // window.genesys.wwe.service.subscribe("agent", this.handleAgentEvent, this);
    }
    eventHandler = (message) => {
        switch (message.event) {
            case "agent":
                console.log("Received agent event: " + JSON.stringify(message, null, "\t"));
                // this.handleAgentEvent(message)
                break;
            case "interaction":
                console.log("Received interaction event: " + JSON.stringify(message, null, "\t"));
                break;
            case "markdone":
                console.log("Received markdone event: " + JSON.stringify(message, null, "\t"));
                break;
            case "media":
                console.log("Received media event: " + JSON.stringify(message, null, "\t"));
                break;
            case "system":
                console.log("Received system event: " + JSON.stringify(message, null, "\t"));
                break;

            default:
        }
    }
    handleAgentEvent = (msg) => {
        console.log(msg, typeof msg)
        switch (msg.data.type) {
            case 'READY':
                console.log('switch to ready');
                this.updateAgentState(msg.data.type);
                break;
            case 'NOT_READY':
                console.log('switch to not ready')
                this.updateAgentState(msg.data.type);
                break;
            case 'NOT_READY_AFTER_CALLWORK':
                console.log('switch to not ready after callwork')
                this.updateAgentState(msg.data.type);
                break;
            default:
        }
    }

    updateAgentState = (status) => {
        this.setState({ agentStatus: status })
    }

    componentDidMount = () => {
        console.log('component mounted')

        this.initializeWebPage();
    }
    render() {
        return (
            <div className={'moduleLoader ' + this.state.agentStatus.toLocaleLowerCase()}>
                Module Loader
                <br />
                {this.state.agentStatus}
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