import React, {Component} from 'react';

export default class TimeCell extends Component {
    render(){
        return <td className="time-cell"> 
            {this.props.startTime}-<br/>
            {this.props.endTime}
        </td>
    }
}