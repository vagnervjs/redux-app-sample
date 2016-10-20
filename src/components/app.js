import React, {Component} from 'react';
import Header from './header';
import ControlBar from './control-bar';
import SearchResult from './search-result';
import '../scss/app.scss';

export default
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <ControlBar/>
                <SearchResult/>
            </div>
        )
    }
}