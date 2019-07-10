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


render(
 <App />,
  document.getElementById('app')
)

function a() {
    console.log('1')
    console.log('2')
    console.log('3')
    console.log('4')
    console.log('5')
}