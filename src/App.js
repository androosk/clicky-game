import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import keanus from "./keanus.json"
import GameCard from "./components/GameCard"

class App extends Component {
  constructor(){
    super()
    this.state = {
      keanus,
      selectedCards: [],
      score: 0,
    }
  }
  keanuCard = e => {
    // get click image value
    const currentKeanu = e.target.alt
    // check if image clicked is in array of previously clicked images
    const previouslySelected = this.state.selectedCards.indexOf(currentKeanu) > -1

    // check if image was previously selected - if so, reset game variables
    if(previouslySelected){
      this.setState({
        keanus: this.state.keanus.sort(function(a,b){
          return 0.5 - Math.random()
        }),
        selectedCards: [],
        score: 0,
      })
      alert("Sorry, you clicked that one before. You lost.")
    }
    else {
      // if image was not previously selected, add currently selected card to array of previously
      // selected, shuffle card order and add 1 to score
      this.setState({
        keanus: this.state.keanus.sort((a,b) => {
          return 0.5-Math.random()
        }),
        selectedCards: this.state.selectedCards.concat(currentKeanu),
        score: this.state.score + 1
      })
    }
    // check to see if player won
    if(this.state.score === 12){
      alert("You Win!")
      this.setState({
        keanus: this.state.keanus.sort(function(a,b){
          return 0.5-Math.random()
        }),
        previouslySelected: [],
        score: 0,
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar score={this.state.score}/>
        <div className="container" style={{ marginTop: 50 }}>
          {this.state.keanus.map(keanus => (
            <GameCard
            keanuCard = {this.keanuCard}
            id={keanus.id}
            key={keanus.id}
            image={keanus.image}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
