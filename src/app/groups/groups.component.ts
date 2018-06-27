import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: [ServiceService]
})
export class GroupsComponent implements OnInit {
  private title = 'Groups';
  private groups: any;

  private groupsArray: any[] = [];
  private getGroups: any;

  constructor(private _location: Location,
    private _service: ServiceService) { }

  ngOnInit() {

    this.getGroups = JSON.parse(localStorage.getItem('groups'));

    console.log(this.getGroups[0].name);

    for (var i = 0; i < this.getGroups.length; i++) {

      this._service.getGroupsByCategory(this.getGroups[i].id).subscribe(res => {
        this.groups = res.json();

        this.groupsArray.push({results: this.groups});

        localStorage.setItem('GroupsArray', JSON.stringify(this.groupsArray));
        
        console.log(this.groupsArray);
        
      });
      }
    
 
  }


  goToHome() {
    this._location.back();
  }
}
