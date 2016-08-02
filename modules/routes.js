// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={App}/>
    <Route path="/gallery" component={App}/>
    <Route path="/about" component={App}/>
    <Route path="/contact" component={App}/>
  </Route>
)