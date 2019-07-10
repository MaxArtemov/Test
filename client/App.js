import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import routes from '../modules/routes'
import HeadBanner from './HeadBanner.js'
import Carousle from './Carousle.js'

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="wrap">
               <HeadBanner />
               CHECK
               <Carousle />
            </div>  
        );
    }
}

function a () {
    console.log('bullshit')
}

function b () {
    console.log('bullshit')
}

function c () {
    console.log('c')
}
function ef () {
    console.log('gggg')
}

render(
 <App />,
  document.getElementById('app')
)
