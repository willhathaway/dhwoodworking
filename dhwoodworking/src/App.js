import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Wrapper from './components/Wrapper';
import Contact from './pages/Contact';

function App() {

    return (
        <Wrapper>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/contact" component={Contact} />

                </Switch>
            </Router>
        </Wrapper>
    );
}

export default App;
