// 'using' statements
import "babel-polyfill"
import fetch from "isomorphic-fetch"
import React, {Component} from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'
import { Nav, Jumbotron, JumboLogin, HomeContents, Timer } from './components'
import * as Boot from 'react-bootstrap' // read up @ https://react-bootstrap.github.io/components.html

console.log(Boot) // what hast thou provided?

// Utility methods
// --------------
const log = (...a) => console.log(...a)

const get = (url) =>
    fetch(url, {credentials: 'same-origin'})
    .then(r => r.json())
    .catch(e => log(e))

const post = (url, data) => 
    fetch(url, { 
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .catch(e => log(e))
    .then(r => r.json())
// ----------------

/*
Build ALL the THINGS!
*/

const Layout = ({children, includeLogin}) => 
    <div>
        <Nav includeLogin={includeLogin}/>
        {children}
    </div>

const Home = () => 
    <div>
        <Nav />
        <Layout includeLogin={true}>
            <Jumbotron />
            <HomeContents />
        </Layout>
    </div>

const Login = () => 
    <div>
        <Layout includeLogin={false}>
            <JumboLogin />
        </Layout>
    </div>

const Register = () => 
    <div>
        <Nav />
        <Layout>
            <form>
            </form>
        </Layout>
    </div>

const Dashboard = () =>
    <div>
        <Nav />
            <Layout>
                <Timer />
            </Layout>
    </div>

const Instructions = () =>
    <Layout>
        
    </Layout>

const reactApp = () => 
    render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/instructions" component={Instructions}/>
    </Router>,
    document.querySelector('.app'))

reactApp()

// Flow types supported (for pseudo type-checking at runtime)
// function sum(a: number, b: number): number {
//     return a+b;
// }
//
// and runtime error checking is built-in
// sum(1, '2');