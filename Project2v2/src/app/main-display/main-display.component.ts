import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {

  users$: User[];
  tournaments$: Tournament[];
  tournamentComplete: string[] = [];
  tournamentArray: string;

  constructor(private dataService: DataService){}

  ngOnInit(){
    //this.getUsers();
    this.getTournamentsIndex();
    console.log("user$: "+this.users$);
    console.log("tournaments$: "+this.tournaments$);
    return;
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked invoked");
    this.tournamentArray = JSON.stringify(this.tournaments$);
    console.log(this.tournaments$[0]);
    for (let i=0;i<this.tournaments$.length;i++){
      if (this.tournaments$[i].tournament.completed_at == null){
        this.tournamentComplete[i] = "In Progress";
      }
      else{
        this.tournamentComplete[i] = "Complete";
      }
      
      console.log(this.tournamentComplete[i]);
    }
    console.log(this.tournamentComplete);
  }

  /*
  getUsers(){
    return this.dataService.getUsers().subscribe(data => this.users$ = data);
  }
  */

  getTournamentsIndex(){
    return this.dataService.getTournamentsIndex().subscribe(data => this.tournaments$ = data);
  }

}
