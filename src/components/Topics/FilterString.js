import React, {Component} from 'react';

export default class FilterString extends Component{
    
    constructor() {
        super(); 

        this.state = {
            stringArray: ['red', 'yellow', 'blue', 'orange', 'green', 'pink', 'green'], 
            userInput: '', 
            filteredArray: [] 
        }
    }
    
    handleChange(val) {
        this.setState({userInput: val}); 
    }

    filterString(userInput) {
        var colors = this.state.stringArray; 
        var filteredColors = []; 

        for (let i = 0; i < colors.length; i++) {
            if (colors[i].includes(userInput)) {
                filteredColors.push(colors[i]); 
            }
        }
        this.setState({filterdColors: filteredColors}); 

    }
    
    
    render() {
        return (
            <div className="puzzleBox filterStringPB"> 
                <h4>Filter String</h4>
                <span className="puzzleText"> Colors {JSON.stringify(this.state.colors, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input> 
                <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput)}> Filter</button>
                <span className="resultsBox filterStringRB">Filtered Colors: {JSON.stringify(this.state.filteredColors, null, 10)}</span>


            </div>
        )
    }
}