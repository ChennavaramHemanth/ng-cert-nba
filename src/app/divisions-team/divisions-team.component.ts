import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../data.models';

@Component({
  selector: 'app-divisions-team',
  templateUrl: './divisions-team.component.html',
  styleUrls: ['./divisions-team.component.css']
})
export class DivisionsTeamComponent {
  @Input() divisions: Team[] = [];
  @Output() filteredDivisionEvent = new EventEmitter<{}>();
  selectDivision(event:any){
    // const teamsData = this.allTeams;
    // const filteredTeams = filteredTeamsByConference(teamsData, event);
    const filteredData = {
      //filteredTeams:filteredTeams,
      divisionValue: event.target.value
    }
    this.filteredDivisionEvent.emit({ filteredData: filteredData});
  }
}
