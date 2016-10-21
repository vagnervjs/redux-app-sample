import React, {Component} from 'react';
import Header from './header';
import ControlBar from './control-bar';
import StatusContainer from '../containers/status-container';
import ResultContainer from '../containers/result-container';
import '../scss/app.scss';

export default
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <ControlBar/>
                <StatusContainer/>
                <ResultContainer/>
            </div>
        )
    }
}
