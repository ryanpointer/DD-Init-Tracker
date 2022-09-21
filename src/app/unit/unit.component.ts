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

  // Handles the initialization of the tracker
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

    let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
    let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
    let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

    if(UNITLIST[0].deathSaves === 1){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"

    }else if(UNITLIST[0].deathSaves === 2){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"

    }else if(UNITLIST[0].deathSaves === 3){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement3.style.backgroundColor = "rgb(0,0,255)"

    }else{

      deathSaveElement1.style.backgroundColor = "rgb(0,0,0)"
      deathSaveElement2.style.backgroundColor = "rgb(0,0,0)"
      deathSaveElement3.style.backgroundColor = "rgb(0,0,0)"

    }

  }

  // Pulls and updates the tracker with data from the next element
  // and iterates the tracker
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

    let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
    let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
    let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

    deathSaveElement1.style.backgroundColor = "rgb(0,0,0)"
    deathSaveElement2.style.backgroundColor = "rgb(0,0,0)"
    deathSaveElement3.style.backgroundColor = "rgb(0,0,0)"

    if(UNITLIST[this.trackedIndex].deathSaves === 1){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"

    }else if(UNITLIST[this.trackedIndex].deathSaves === 2){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"

    }else if(UNITLIST[this.trackedIndex].deathSaves === 3){

      deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
      deathSaveElement3.style.backgroundColor = "rgb(0,0,255)"

    }

  }

  // Handles the statuses assigned to each unit
  updateStatus(statusID : string){

    let targetUnit = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;

    // Updates the status depending on which button is clicked
    // in the Action Panel
    switch(statusID){

      // Is the unit dead?
      case statusID = "deathStatus":{
        targetUnit.style.backgroundColor = "rgb(255,0,0)";
        UNITLIST[this.trackedIndex].dead = true;
        break;
      }

      // "revives" the unit and falsifies "dead" status
      case statusID = "reviveStatus":{
        targetUnit.style.backgroundColor = "rgb(128,128,128)";
        UNITLIST[this.trackedIndex].dead = false;
        break;
      }

      // unit has one death save 
      case statusID = "ds1":{
        UNITLIST[this.trackedIndex].deathSaves = 1;
        let deathSaveElement = document.getElementById("ds1") as HTMLInputElement;
        deathSaveElement.style.backgroundColor = "rgb(0,0,255)"
        break;
      }

      // unit has two death saves
      case statusID = "ds2":{
        UNITLIST[this.trackedIndex].deathSaves = 2;
        let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
        deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
        let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
        deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
        break;
      }

      // unit has three death saves and stabilizes
      case statusID = "ds3":{
        UNITLIST[this.trackedIndex].deathSaves = 3;
        let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
        deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
        let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
        deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
        let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;
        deathSaveElement3.style.backgroundColor = "rgb(0,0,255)"
        break;
      }

    }

  }

}
