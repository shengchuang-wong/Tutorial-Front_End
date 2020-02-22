import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import '../App.css';

class App extends Component {

	signOut() {
		firebaseApp.auth().signOut();
	}

  render() {
    return (
      <div style={{margin: '5px'}}>
        <div>
        	<h3>Goals Coach</h3>
        	<AddGoal />
          <hr />
          <h4>Goals</h4>
        	<GoalList />
          <hr />
          <h4>Complete Goals</h4>
          <CompleteGoalList />
          <hr />
        </div>
        <button
        	className="btn btn-danger"
        	onClick={() => this.signOut()}
        >
        	Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
	// console.log('state', state);
	return {}
}

export default connect(mapStateToProps, null)(App);
