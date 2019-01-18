import React, { Component } from 'react';
import PageContainer from './components/PageContainer';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPageHandler = e => {
    e.preventDefault();
    const nextPage = this.state.currentPage + 1;
    const nextPageURL = 'https://swapi.co/api/people?page=' + (nextPage).toString();
    console.log(nextPageURL);
    this.getCharacters(nextPageURL);
    this.setState({currentPage: nextPage});
  }

  // Create an instance of the CharacterList component and pass down the starwarsChars array found in state
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PageContainer currentPage={this.state.currentPage} nextPageHandler={this.nextPageHandler}/>
        <CharacterList chars={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
