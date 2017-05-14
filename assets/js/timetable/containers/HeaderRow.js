import React, {Component} from 'react';
import DayCell from "../components/DayCell.js";

export default class HeaderRow extends Component{
    render(){
        return <thead>
            <tr>
            <DayCell date={this.props.date} />
            </tr>
        </thead>
    }
}