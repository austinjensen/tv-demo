import React, { Component } from 'react';
import Manageshows from './Pages/Manageshows'
import './App.css';
import Viewshows from './Pages/Viewshows'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    shows: [
      {
        name: 'Walking Dead',
        rating: 4,
        image: 'https://pbs.twimg.com/profile_images/956941358219931649/2rsLjOg-_400x400.jpg'
      },
      {
        name: 'Sing',
        rating: 1,
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQeTMzh3aGw46IVUdS6N2tToanuLOc9dO7f6CgWVQlq1laJjuXa'
      },
      {
        name: 'The Office',
        rating: 2,
        image: 'https://media.gq.com/photos/5a53e9fca929253c4d20a04f/3:2/w_800/does-the-office-hold-up-gq.jpg'
      }
    ]

  }

  createshow = (show) => {
    this.setState((previousState) => {
      const existingShows = previousState.shows
      existingShows.push(show)
      return {
        shows: existingShows
      }

    })
  }
 
  render() {
    return (

      <Router>
        <div className="App">


          <Switch>
            <Route exact path="/" component={() => <Viewshows allshows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <Manageshows allshows={this.state.shows} createShow={this.createshow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
