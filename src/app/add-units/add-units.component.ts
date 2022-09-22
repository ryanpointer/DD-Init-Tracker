import { Component, OnInit } from '@angular/core';
import { AddUnits } from '../add-units-interface';
import { UNITLIST } from '../units-list';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {


  // Variables outlayed in add-units-interface.ts
  name!: string;
  init!: number;
  dex!: number;

  dexMod!: number;
  index!: number;

  dead!: boolean;
  deathSaves!: number;
  deathFails!: number;
  conditions!: string[];


  units = UNITLIST;

  // Calculates dexterity modifier per D&D 5e ruleset and assigns 
  // it to the current units dexMod variable.
  // Adds unit to the UNITLIST array.
  addUnits(){

    this.dexMod = Math.floor((this.dex - 10) / 2);
    UNITLIST.push({ name: this.name, init: this.init, dex: this.dex, 
      dexMod: this.dexMod, index: this.units.length,
       dead: this.dead, deathSaves: this.deathSaves, 
        deathFails: this.deathFails, 
          conditions: this.conditions});

    // Dynamically sorts UNITLIST array with each addition
    this.sortUnitsGreedy();

  }

  // Time Complexity - O(n^2)
  // Space Complexity - O(1)
  sortUnitsGreedy(){ //bubble sort - small array of data

    for(let i = 0; i < UNITLIST.length; i++){
      for(let j = 0; j < UNITLIST.length - 1; j++){

        if(UNITLIST[j].init > UNITLIST[j+1].init){
          let place = UNITLIST[j];
          UNITLIST[j] = UNITLIST[j+1];
          UNITLIST[j+1] = place;
          let placeIndex = UNITLIST[j+1].index;
          UNITLIST[j+1].index = UNITLIST[j].index;
          UNITLIST[j].index = placeIndex;
        }else if(UNITLIST[j].init == UNITLIST[j+1].init){
          if(UNITLIST[j].dex > UNITLIST[j+1].dex){
            let place = UNITLIST[j];
            UNITLIST[j] = UNITLIST[j+1];
            UNITLIST[j+1] = place;
            let placeIndex = UNITLIST[j].index;
            UNITLIST[j].index = UNITLIST[j+1].index;
            UNITLIST[j+1].index = placeIndex;
          }
        }
      }
    }
    UNITLIST.reverse();

    // updates the index of each unit tp preserve the list
    for(let i = 0; i < this.units.length; i++){
      UNITLIST[i].index = i+1;
    }
  }

  // removes desired unit from list and terminates its position 
  // in the array - does not leave the removed units former index as
  // unassigned 
  removeUnit(index: number){
    UNITLIST.splice(index,1);
    this.sortUnitsGreedy();
  }

  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
