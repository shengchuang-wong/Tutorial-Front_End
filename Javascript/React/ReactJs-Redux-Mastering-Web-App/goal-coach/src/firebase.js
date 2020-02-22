import * as  firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyAxal9T14BSnOsq1EWmAQcSugAyj_0RSZg",
    authDomain: "goalcoach-d76a6.firebaseapp.com",
    databaseURL: "https://goalcoach-d76a6.firebaseio.com",
    projectId: "goalcoach-d76a6",
    storageBucket: "",
    messagingSenderId: "207620291198"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');