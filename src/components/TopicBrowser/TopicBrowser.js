import React, {Component} from 'react'; // import react and component from react 
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome' 
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {  // creating and exporting react component called TopicBrowser 
    render() {  // renders one P element
        return (
            <div> 
                <EvenAndOdd/> 
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>

        )
    }
}