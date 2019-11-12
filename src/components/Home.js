import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"

let signUp = (
  <footer class="footer row-full">
  <div class="content has-text-centered">
    <h1 class="title">Ready to get started?</h1>
    <button class="button is-medium is-outlined">Sign up</button>
  </div>
</footer>

)


class home extends Component {
  render(){
    return (
      <div class="home">
        <section class="hero is-large">
           <div class="hero-body">
             <div class="container">
               <div class="columns">
                  <div class="column is-three-fifths is-vcentered">
                    <h1 class="title has-text-white is-size-1">
                      Teaching programming,
                      <p style={{color: "#DE935F"}}>made simple</p>
                    </h1>
                  </div>
                  <div class="column">
                    <div class="presentationScreen">
                      // LUCAS DO THIS PART
                    </div>

                  </div>


                </div>
             </div>
           </div>
    </section>
    {signUp}
      </div>


    )
  }
}

export default home
