import React, {Component} from 'react';

export default class DayCell extends Component {

    render(){
        return <td className="day-cell" colSpan="6">
            {this.props.date}
            </td>;
    }
} 