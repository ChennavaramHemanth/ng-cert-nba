import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  filteredTeamsByConference } from '../data.helper';
import { Team } from '../data.models';

@Component({
  selector: 'app-conference-team',
  templateUrl: './conference-team.component.html',
  styleUrls: ['./conference-team.component.css']
})
export class ConferenceTeamComponent {
  @Input() allTeams: Team[] = [];
  @Output() filteredItemEvent = new EventEmitter<{}>();
  selectConference(event: any) {
    const teamsData = this.allTeams;
    const filteredTeams = filteredTeamsByConference(teamsData, event);
    const filteredData = {
      filteredTeams:filteredTeams,
      conferenceValue: event.target.value
    }
    this.filteredItemEvent.emit({ filteredData: filteredData});
  }
  
}
