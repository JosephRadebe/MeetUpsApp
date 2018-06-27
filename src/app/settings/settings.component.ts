import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [ServiceService]
})
export class SettingsComponent implements OnInit {
  private title = 'Settings';
  private categories: any;

  private saveCategory: any[] = [];

  //show status message
  public statusMessage: string;

  constructor(private _service: ServiceService,
              private _router: Router) { }

  //retrieve all category groups
  public getGategories() {
    this._service.getGroupCategories().subscribe(res => {
      this.categories = res.json().results;

      console.log(this.categories[0]);
    });

  }

  ngOnInit() {
    this.getGategories();     //display initially
  }

  public addCategory(_id:any) {
    //save categories
    
    for (var x = 0; x < this.categories.length;x++) {

      if(this.categories[x].id === _id) {
        
        if(this.saveCategory) {
          this.saveCategory.push(this.categories[x]);     //store locally
        }

        console.log(this.saveCategory);
      }
    }
  }

  public goToGroups() {

    localStorage.setItem('groups', JSON.stringify(this.saveCategory));

    this._router.navigate(['groups']);

    console.log('I am going to groups');
  }
}
