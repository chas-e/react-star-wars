import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { getAllStarships } from '../../services/sw-api';
import StarshipPage from '../StarshipPage/StarshipPage';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';

class App extends Component {

  state = {
    results: []
  };

  async componentDidMount() {
    const allStarships = await getAllStarships();
    this.setState({
      results: allStarships.results
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          STAR WARS STARSHIPS
        </header>
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              this.state.results.length ?
                this.state.results.map((r, idx) => (
                  <div className="StarShips" key={idx}>
                    <Link to={{ pathname: `/starships/${idx}`, state: r }}>
                      {r.name}
                    </Link>
                  </div>
                ))
                :
                <LoadingMessage />
            )}
          />

          <Route
            path="/starships/:id"
            component={StarshipPage}
            LoadingMessage={this.LoadingMessage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;