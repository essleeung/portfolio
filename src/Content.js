import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

const Content = props => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>   
        </Switch>
    )
}

export default Content