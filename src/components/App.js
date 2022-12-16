import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Messages from './Messages';
import Navbar from './Navbar';
import Signup from './Signup'
import About from './About';

function App() {
    return (
        <div>
        <Navbar />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/signup'>
                <Signup />
            </Route>
            <Route exact path='/messages'>
                <Messages />
            </Route>
        </Switch>
            
        </div>
    )
}

export default App