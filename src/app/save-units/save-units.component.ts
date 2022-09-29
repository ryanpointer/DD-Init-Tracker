import { Component, OnInit } from '@angular/core';
import { SAVEDUNITS } from '../save-units-list';

@Component({
  selector: 'app-save-units',
  templateUrl: './save-units.component.html',
  styleUrls: ['./save-units.component.css']
})
export class SaveUnitsComponent implements OnInit {

  savedUnits = SAVEDUNITS;

  name!: string;
  dex!: number;

  constructor() { }

  ngOnInit(): void {
  }

  // iterates through SAVEDUNITS array and pushes data to
  // a txt file that can be loaded to retrieve saved units
  exportSavedUnits(){
    for(let i = 0; i < SAVEDUNITS.length; i++){
      
    } 
  }

  removeUnit(index: number){
    SAVEDUNITS.splice(index,1);
  }

  saveUnits(){
    SAVEDUNITS.push({name: this.name, dex: this.dex})
  }

}
