import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: '10/10/2017'
    }
  }

  changeDeadline(newDeadline) {
    this.setState({
      deadline: newDeadline
    });
  }

  render() {


    return (
      <div className="App">
        <div className="App-title">Countdown {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
          className="Deadline-input"
          onChange={(e) => this.changeDeadline(e.target.value)}
          placeholder="new date"
          type="date" />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
