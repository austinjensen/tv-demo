import React, { Component } from 'react';
import Manageshows from './Pages/Manageshows'
import './App.css';
import Viewshows from './Pages/Viewshows'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    shows: []
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

  testPromises = () => {
    console.log('testing some promises')
    new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        if (success)
          resolve('good promise')
        else
          reject('bad promise')
      }, 300)

    })
      .then((value) => { console.log(value) })
      .catch((error) => { console.log(error) })
    console.log('finished project excution')
  }

  getShows = () => {
    fetch('http://localhost:3001/shows')
      .then((response) => {
        // console.log("response", response)
        const result = response.json()
        // console.log("result:", result)
        return result

      })
      .then((shows) => {
        // console.log("jsonData", shows)
        this.setState({ shows })
      })
      .catch((error) => {
        // console.log(error)
        this.setState({ errorMessage: error })
      })
  }
  postShow = (showToSave) => {
    const postInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showToSave)
    }
    fetch('http://localhost:3001/shows', postInit)
      .then((postShowsResp) => {
        return postShowsResp.json()
      })
      .then((show) => {
        this.createshow(show)
      })
      .catch((error) => {
        this.setState({ errorMessage: error })
      })
  }
  renderError = () => {
    return this.state.errorMessage
      ? (<div> {this.state.errorMessage.toString()}</div>)
      : (<div></div>)
  }

  componentDidMount() {
    // this.testPromises()
    this.getShows()
  }

  render() {
    return (

      <Router>
        <div className="App">
          {this.renderError()}
          <Switch>
            <Route exact path="/" component={() => <Viewshows allshows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <Manageshows allshows={this.state.shows} createShow={this.postShow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
