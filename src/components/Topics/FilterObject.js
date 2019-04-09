import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      dates: [
        {
          name: 'Jacob',
          title: 'potential',
          age: 26,
        },
        {
          name: 'Cameron',
          title: 'potential',
          age: 27
        },
        {
          name: 'Brett',
          title: 'potential',
          age: 27 
        }, 
        {
            name: 'Stuart',
            title: 'not a potential', 
            age: 28
          }
      ], 
      userInput: '',
      filteredDates: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterDates(prop) {
    var dates = this.state.dates;
    var filteredDates = [];
    
    for ( var i = 0; i < dates.length; i++ ) {
      if ( dates[i].hasOwnProperty(prop) ) {
        filteredDates.push(dates[i]);
      }
    }

    this.setState({ filteredDates: filteredDates });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.dates, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterDates(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredDates, null, 10) } </span>
      </div>
    )
  }
}