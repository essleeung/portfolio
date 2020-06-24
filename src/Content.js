import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'

const Content = props => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>   
        </Switch>
    )
}

export default Content