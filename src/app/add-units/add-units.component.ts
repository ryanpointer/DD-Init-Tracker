import { Component, OnInit } from '@angular/core';
import { AddUnits } from '../add-units-interface';
import { UNITLIST } from '../units-list';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {

  name!: string;
  init!: number;
  dex!: number;


  units = UNITLIST;

  addUnits(){

    //this.units.push({ name: this.name, init: this.init, dex: this.dex });
    UNITLIST.push({ name: this.name, init: this.init, dex: this.dex });

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
        }else if(UNITLIST[j].init == UNITLIST[j+1].init){
          if(UNITLIST[j].dex > UNITLIST[j+1].dex){
            let place = UNITLIST[j];
            UNITLIST[j] = UNITLIST[j+1];
            UNITLIST[j+1] = place;
          }
        }
      }
    }
    UNITLIST.reverse();
  }


//// Dev Tools /////////////////////////////////  
  displayUnitListSize(){
    let listSizeContainer = document.getElementById('listSize') as HTMLInputElement;
    listSizeContainer.innerText = "Size of Unit List : " + UNITLIST.length;
  }

  loadDevToolComponents(){

    this.displayUnitListSize();

  }
////////////////////////////////////////////////




  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
