import React, { Component } from 'react';
import HeaderRow from "./HeaderRow.js";
import SessionRow from "./SessionRow.js";

import SessionCell from "../components/SessionCell.js";

export default class Timetable extends Component {
  render() {
    const timeslots = [];

    const regSessionCell = <SessionCell fullSession="true" title="Registration" key="session-d1-0915" />;
    const regSessionRow = <SessionRow key="d1-0915" startTime="09:15" endTime="10:00" sessions={[regSessionCell]}/>;
    const lunchSessionCell = <SessionCell fullSession="true" title="Lunch" key="session-d1-1240" />;
    const lunchSessionRow = <SessionRow key="d1-1240" startTime="12:40" endTime="13:40" sessions={[lunchSessionCell]}/>;

    const s100Sessions = [];
    for(var i=0; i<5;i++){
      s100Sessions.push(<SessionCell title={"item"+i} key={"session-d1-1000-"+i} speaker={i%2?null:"Speaker"+i}/>);
    }
    const s100Row = <SessionRow key="d1-1000" startTime="10:00" endTime="10:15" sessions={s100Sessions}/>; 
    
    timeslots.push(regSessionRow);
    timeslots.push(s100Row);
    timeslots.push(lunchSessionRow);
    
    return <table className="timetable">
      <HeaderRow date="9-Jun"/>
      <tbody>
      {timeslots}
      </tbody>
    </table>;
  }
 }
