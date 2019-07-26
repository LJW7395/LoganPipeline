import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Tournament } from '../tournament.model';

@Component({
  selector: 'app-view-tourney',
  templateUrl: './view-tourney.component.html',
  styleUrls: ['./view-tourney.component.css']
})
export class ViewTourneyComponent implements OnInit {
  route: any;

  tournaments$: Tournament[];
  id: string;
  completeURL: SafeResourceUrl;
  tournamentIndex: number;
  tournamentName: string;

  constructor(private router: Router, private sanitizer: DomSanitizer, private dataService: DataService) { }

  ngOnInit() {
    // Grabs the URL id and sets up the resource URL for challonge embed
    this.id = this.router.url.slice(14);
    this.completeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://challonge.com/" + this.id + "/module");
    console.log("The Id is: " + this.id);

    // Populates tournaments$ so info can be grabbed in ngDoCheck()
    this.getTournamentsIndex();
  }

  ngDoCheck() {
    // Sets an index and name for the currently selected tournament
    // after tournaments$ is populated
    if (this.tournaments$ != undefined) {
      for (let i = 0; i < this.tournaments$.length; i++) {
        if (this.tournaments$[i].tournament.url == this.id) {
          this.tournamentIndex = i;
        }
      }
      console.log(this.tournamentIndex);
      this.tournamentName = this.tournaments$[this.tournamentIndex].tournament.name;
      console.log(this.tournamentName);
    }
  }

  getTournamentsIndex() {
    return this.dataService.getTournamentsIndex().subscribe(data => this.tournaments$ = data);
  }

}
