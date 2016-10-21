import React, {Component} from 'react';
import Header from './header';
import ControlBar from './control-bar';
import SearchResultContainer from '../containers/search-result-container';
import '../scss/app.scss';

export default
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <ControlBar/>
                <SearchResultContainer/>
            </div>
        )
    }
}
