import React from 'react';
import { Route } from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'

const Content = props => {
    let posts= [{title: "First things first", content: "Lorem ipsum gobbly goook...."}, 
                {title: "Second things second", content: "soft kitty warm kitty little ball of fur"}]
    return (
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => (
                <About name="Sharon Lee" img="http://placekitten.com/300/300" content="I'm a detail-oriented full-stack software engineer transitioning from a health IT background. I have over 10 years of experience in healthcare and have worn many different hats as a project manager, implementation engineer and business consultant. "/>
            )}/>
            <Route path="/blog" render={() => (
                <Blog posts={posts}/>
            )} />
            
        </div>
    )
}

export default Content