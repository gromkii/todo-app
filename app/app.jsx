import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import TodoApp from 'TodoApp'

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp} /> 
  </Router>
, document.getElementById('app'));
