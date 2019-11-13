import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"
import presentation from "../pictures/presentation.png"

let signUp = (
    <div class="has-text-centered foot row-full">
      <h1 class="title">Ready to get started?</h1>
      <button class="button is-medium is-outlined but">Sign up</button>
    </div>
  
)


class home extends Component {
  render(){
    return (
      <div class="home">
        <div class="content">
             
            <div class="columns">
              <div class="column is-three-fifths is-centered">
                <h1 class="title has-text-white is-size-1"> <br></br><br></br>
                  Teaching programming,
                  <p>made <span style={{color: "#de935f"}}>simple</span></p>
                </h1>
              </div>
              <div class="column">
                <div class="presentationScreen">
                  <img class="picture" src={presentation} />
                </div>
              </div>
            </div>
             
          </div>
          {signUp}
        </div>


    )
  }
}

export default home
