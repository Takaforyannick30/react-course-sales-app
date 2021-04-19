import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales'

class App extends Component {
  render() {
    let courses = [
      { name: 'Complete Android dev course', price: 140 },
      { name: 'Complete front end dev course', price: 130 },
      { name: 'Complete python dev course', price: 120 },
      { name: 'Complete django dev course', price: 110 },
    ]
    return (
      <div className="App">
       <h1>Course sales page</h1>
        <Coursesales items={courses} />
      </div>
    );

  }
 
}

export default App;
