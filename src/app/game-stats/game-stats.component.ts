import { Component, OnInit } from '@angular/core';
import { Team } from '../data.models';
import { NbaService } from '../nba.service';
import { filterDivisionData } from '../data.helper';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent implements OnInit {

  filteredTeams: Team[] = [];
  allTeams: Team[] = [];
  divisions: Team[] = [];
  completeDivisions: Team[] = [];
  conference: string= '';
  constructor(protected nbaService: NbaService) { }

  ngOnInit(): void {
    this.nbaService.getAllTeams().subscribe(data => {
      this.allTeams = data
      this.filteredTeams = this.allTeams;
      this.divisions = filterDivisionData(this.allTeams);
      this.completeDivisions = filterDivisionData(this.allTeams);
      console.log(this.divisions);
    })
  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team)
      this.nbaService.addTrackedTeam(team);
  }

  selectConference(event: any) {
    this.filteredTeams = event.filteredData.filteredTeams;
    this.conference = event.filteredData.conferenceValue;
    this.divisions = this.completeDivisions.filter((division:any) => {
      return division.conference.toLowerCase() == event.filteredData.conferenceValue.toLowerCase();
    });   
    console.log(this.divisions); 
  }

  selectDivision(event: any){
    let teamsArray:any = [];
    let self = this;
    this.allTeams.forEach(function (item: any) {
      if((item.conference.toLowerCase() == self.conference.toLowerCase()) && (item.division.toLowerCase() == event.filteredData.divisionValue.toLowerCase())){
        teamsArray.push(item);
      } else{

      }
    });  
    this.filteredTeams = teamsArray;
  }
}
