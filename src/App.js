import React from 'react';
import DisplayQuote from './components/DisplayQuote'
import axios from 'axios';

const displayQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: displayQuote
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.data)
    .then(data => {
      this.setState({
        quote: data[0],
      })
    })
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote props={this.state.quote}/>
        <button type="button" onClick={this.getQuote}>Click me to get a new quote</button>
      </div>
    );
  }
}


export default App;