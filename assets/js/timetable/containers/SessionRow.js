import React, {Component} from 'react';
import TimeCell from "../components/TimeCell.js";

export default class SessionRow extends Component{
    render(){
        return <tr className="grid-row">
            <TimeCell startTime={this.props.startTime} endTime={this.props.endTime} />
            {this.props.sessions}
        </tr>;
    }
}