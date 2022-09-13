import { Component, OnInit } from '@angular/core';
import { AddUnits } from '../add-units-interface';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {

  name!: string;
  init!: number;
  dex!: number;


  units: any[] = [

  ];

  addUnits(){

    this.units.push({ name: this.name, init: this.init, dex: this.dex });

  }

  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
