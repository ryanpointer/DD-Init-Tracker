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

  // Time Complexity - O(n^2)
  // Space Complexity - O(1)
  sortUnitsGreedy(){ //bubble sort - small array of data

    for(let i = 0; i < this.units.length; i++){
      for(let j = 0; j < this.units.length - 1; j++){

        if(this.units[j].init > this.units[j+1].init){
          let place = this.units[j];
          this.units[j] = this.units[j+1];
          this.units[j+1] = place;
        }else if(this.units[j].init == this.units[j+1].init){
          if(this.units[j].dex > this.units[j+1].dex){
            let place = this.units[j];
            this.units[j] = this.units[j+1];
            this.units[j+1] = place;
          }
        }
      }
    }
    this.units.reverse();
  }


//// Dev Tools /////////////////////////////////  
  displayUnitListSize(){
    let listSizeContainer = document.getElementById('listSize') as HTMLInputElement;
    listSizeContainer.innerText = "Size of Unit List : " + this.units.length;
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
