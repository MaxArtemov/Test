import React from 'react';
import {render} from 'react-dom'

export default class Carousle extends React.Componenet(){
    constructor(props){
        super(props)
    }
    render(){
        return(
              <div id="carousel-gallery" className="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                     <li data-target="#carousel-gallery" data-slide-to="0" class="active"></li>
                     <li data-target="#carousel-gallery" data-slide-to="1"></li>
                     <li data-target="#carousel-gallery" data-slide-to="2"></li>
                  </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="..." alt="..."/>
                            <div class="carousel-caption">
                               <h3>First Pic</h3>
                                <p>its a very nice pic</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="..." alt="..."/>
                            <div class="carousel-caption">
                                    <h3>Second Pic</h3>
                                    <p>its a nice pic</p>
                            </div>
                        </div>
                    </div>
                      //Controls
                        <a class="left carousel-control" href="#carousel-gallery" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-gallery" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
              </div>  
        );
    }
} 
