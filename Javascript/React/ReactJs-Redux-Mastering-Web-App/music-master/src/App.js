import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    let FETCH_URL = `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;

    fetch(FETCH_URL, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer BQDj0WLay3mv41LgIQ1exDwzNTPEShY5oQVqOrMCjKoQL3XUlbGJ33rs1ZI5xPDMaysVEoReYpL7Z7amCrYktcGHVoLwymUFMhHtdA0U5V3MbFUqcwppzyqYqlrxPrzkujpEKS-OePnZH7NzKqWyjFo2Qbd1R6YLP4M'
      })
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist}); 

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=MY`;
      fetch(FETCH_URL, {
        method: 'GET',
        headers: new Headers({
        'Authorization': 'Bearer BQDj0WLay3mv41LgIQ1exDwzNTPEShY5oQVqOrMCjKoQL3XUlbGJ33rs1ZI5xPDMaysVEoReYpL7Z7amCrYktcGHVoLwymUFMhHtdA0U5V3MbFUqcwppzyqYqlrxPrzkujpEKS-OePnZH7NzKqWyjFo2Qbd1R6YLP4M'
        })
      })
      .then(response => response.json())
      .then(json => {
        const {tracks} = json;
        console.log(tracks);
        this.setState({
          tracks
        });
      })
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl 
            type="text" 
            placeholder="Search for an Artist"
            value={this.state.query}
            onChange={e => {this.setState({query: e.target.value})}}            
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.search()
              }
            }} /> 
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null ?
            <div>
            <Profile 
            artist={this.state.artist}
            />
            <Gallery
              tracks={this.state.tracks}
            />
          </div>

          : <div></div>
        }
      </div>
    );
  }
}

export default App;
