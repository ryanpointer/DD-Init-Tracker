import { Component, OnInit } from '@angular/core';
import { UNITLIST } from '../units-list';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitlist = UNITLIST;
  trackedIndex: number;

  constructor() { 

    this.trackedIndex = 0;

  }

  ngOnInit(): void {
    this.trackFunc();
  }

  trackFunc(){

    for(let i = 0; i < this.unitlist.length; i++){
      var unit = document.createElement("p");
      unit.className = "tracked_unit";
      unit.id = "unit"+(i+1);
      unit.innerHTML = this.unitlist[i].name;
      document.getElementById("trackerContainer")?.appendChild(unit);

    }

    let firstUnit = document.getElementById("unit1") as HTMLInputElement;
    firstUnit.style.borderColor = "rgb(0,255,0)";

  }

  iterateUnit(){

    if(this.trackedIndex+1 === this.unitlist.length){

      let bottomOfTheRound = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      bottomOfTheRound.style.borderColor = "rgb(255,0,0)";
      this.trackedIndex = 0;
      let topOfTheRound = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      topOfTheRound.style.borderColor = "rgb(0,255,0)";
      
    }else{

      let pastUnit = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      pastUnit.style.borderColor = "rgb(255,0,0)";
      this.trackedIndex++;
      let currUnit = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      currUnit.style.borderColor = "rgb(0,255,0)";

    }

  }

}
