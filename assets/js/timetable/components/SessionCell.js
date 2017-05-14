import React, {Component} from 'react';

export default class SessionCell extends Component{
    render(){
        return <td className="session-cell" colSpan={this.props.fullSession?6:1}>
            {this.props.title}<br />
            {this.props.speaker?this.props.speaker:""}
        </td>;
    }
}