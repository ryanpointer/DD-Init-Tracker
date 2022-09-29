import { Component, OnInit } from '@angular/core';
import { UNITLIST } from '../units-list';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitlist = UNITLIST;

  // Iterater that determines which unit of the array is 
  // considered the "current" unit
  trackedIndex: number;

  constructor() { 

    this.trackedIndex = 0;

  }

  // Starts the unit component with the tracker pointing to
  //  the first unit in the array
  ngOnInit(): void {
    this.trackFunc();
  }

  // Handles the initialization of the tracker
  // Points to the first unit in the array
  trackFunc(){

    // Iteratively displays each unit of the array by creating a new
    // element and appending it to the div
    // Also assigns each created element with an id for reference
    for(let i = 0; i < this.unitlist.length; i++){
      var unit = document.createElement("p");
      unit.className = "tracked_unit";
      unit.id = "unit"+(i+1);
      unit.innerHTML = this.unitlist[i].name;
      document.getElementById("trackerContainer")?.appendChild(unit);

    }

    // Updates tracker ui to show that the first unit is current
    let firstUnit = document.getElementById("unit1") as HTMLInputElement;
    firstUnit.style.borderColor = "rgb(0,255,0)";

    let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
    let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
    let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

    deathSaveElement1.style.backgroundColor = "rgb(0,0,0)"
    deathSaveElement2.style.backgroundColor = "rgb(0,0,0)"
    deathSaveElement3.style.backgroundColor = "rgb(0,0,0)"

    // Checks the first unit for death saves/fails and updates ui
    // accordingly
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

    let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
    let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
    let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;

    deathFailElement1.style.backgroundColor = "rgb(0,0,0)"
    deathFailElement2.style.backgroundColor = "rgb(0,0,0)"
    deathFailElement3.style.backgroundColor = "rgb(0,0,0)"

    if(UNITLIST[0].deathFails === 1){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"

    }else if(UNITLIST[0].deathFails === 2){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement2.style.backgroundColor = "rgb(255,0,0)"

    }else if(UNITLIST[0].deathFails === 3){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement2.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement3.style.backgroundColor = "rgb(255,0,0)"

    }

    // Checks the first units conditions array and updates
    // tracker ui accordingly
    let checkArray = UNITLIST[0].conditions;
    let blindedElement = document.getElementById('blinded') as HTMLInputElement;
    let charmedElement = document.getElementById('charmed') as HTMLInputElement;
    let deafenedElement = document.getElementById('deafened') as HTMLInputElement;
    let frightenedElement = document.getElementById('frightened') as HTMLInputElement;
    let grappledElement = document.getElementById('grappled') as HTMLInputElement;
    let invisibleElement = document.getElementById('invisible') as HTMLInputElement;
    let paralyzedElement = document.getElementById('paralyzed') as HTMLInputElement;
    let petrifiedElement = document.getElementById('petrified') as HTMLInputElement;
    let poisonedElement = document.getElementById('poisoned') as HTMLInputElement;
    let restrainedElement = document.getElementById('restrained') as HTMLInputElement;
    let stunnedElement = document.getElementById('stunned') as HTMLInputElement;
    let unconciousElement = document.getElementById('unconcious') as HTMLInputElement;

    blindedElement.style.borderColor = "rgb(255,255,255)";
    charmedElement.style.borderColor = "rgb(255,255,255)";
    deafenedElement.style.borderColor = "rgb(255,255,255)";
    frightenedElement.style.borderColor = "rgb(255,255,255)";
    grappledElement.style.borderColor = "rgb(255,255,255)";
    invisibleElement.style.borderColor = "rgb(255,255,255)";
    paralyzedElement.style.borderColor = "rgb(255,255,255)";
    petrifiedElement.style.borderColor = "rgb(255,255,255)";
    poisonedElement.style.borderColor = "rgb(255,255,255)";
    restrainedElement.style.borderColor = "rgb(255,255,255)";
    stunnedElement.style.borderColor = "rgb(255,255,255)";
    unconciousElement.style.borderColor = "rgb(255,255,255)";

    if(checkArray.includes('blinded')){

      let blindedElement = document.getElementById('blinded') as HTMLInputElement;
      blindedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('charmed')){

      let charmedElement = document.getElementById('charmed') as HTMLInputElement;
      charmedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('deafened')){

      let deafenedElement = document.getElementById('deafened') as HTMLInputElement;
      deafenedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('frightened')){

      let frightenedElement = document.getElementById('frightened') as HTMLInputElement;
      frightenedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('grappled')){

      let grappledElement = document.getElementById('grappled') as HTMLInputElement;
      grappledElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('invisible')){

      let invisibleElement = document.getElementById('invisible') as HTMLInputElement;
      invisibleElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('paralyzed')){

      let paralyzedElement = document.getElementById('paralyzed') as HTMLInputElement;
      paralyzedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('petrified')){

      let petrifiedElement = document.getElementById('petrified') as HTMLInputElement;
      petrifiedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('poisoned')){

      let poisonedElement = document.getElementById('poisoned') as HTMLInputElement;
      poisonedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('restrained')){

      let restrainedElement = document.getElementById('restrained') as HTMLInputElement;
      restrainedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('stunned')){

      let stunnedElement = document.getElementById('stunned') as HTMLInputElement;
      stunnedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('unconcious')){

      let unconciousElement = document.getElementById('unconcious') as HTMLInputElement;
      unconciousElement.style.borderColor = "rgb(0,0,255)";

    }

  }

  // Pulls and updates the tracker with data from the next element
  // and iterates the tracker
  iterateUnit(){

    // if we have exhausted the list of units then start again from the 
    // beginning and update the tracker ui accordingly
    if(this.trackedIndex+1 === this.unitlist.length){

      let bottomOfTheRound = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      bottomOfTheRound.style.borderColor = "rgb(255,0,0)";
      this.trackedIndex = 0;
      let topOfTheRound = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      topOfTheRound.style.borderColor = "rgb(0,255,0)";
      
    }else{

      // else continue to the next unit in the list

      let pastUnit = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      pastUnit.style.borderColor = "rgb(255,0,0)";
      this.trackedIndex++;
      let currUnit = document.getElementById("unit"+(this.trackedIndex+1)) as HTMLInputElement;
      currUnit.style.borderColor = "rgb(0,255,0)";

    }

    // When iterating to a new unit check its number of death saves
    // and update the tracker ui accordingly
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

    // When iterating to a new unit check its number of death save
    // failures and update tracker ui accordingly
    let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
    let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
    let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;

    deathFailElement1.style.backgroundColor = "rgb(0,0,0)"
    deathFailElement2.style.backgroundColor = "rgb(0,0,0)"
    deathFailElement3.style.backgroundColor = "rgb(0,0,0)"

    if(UNITLIST[this.trackedIndex].deathFails === 1){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"

    }else if(UNITLIST[this.trackedIndex].deathFails === 2){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement2.style.backgroundColor = "rgb(255,0,0)"

    }else if(UNITLIST[this.trackedIndex].deathFails === 3){

      deathFailElement1.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement2.style.backgroundColor = "rgb(255,0,0)"
      deathFailElement3.style.backgroundColor = "rgb(255,0,0)"

    }

    // When iterating to a new unit check the contents of
    // that units conditions array and update the 
    // tracker ui accordingly

    let checkArray = UNITLIST[this.trackedIndex].conditions;
    let blindedElement = document.getElementById('blinded') as HTMLInputElement;
    let charmedElement = document.getElementById('charmed') as HTMLInputElement;
    let deafenedElement = document.getElementById('deafened') as HTMLInputElement;
    let frightenedElement = document.getElementById('frightened') as HTMLInputElement;
    let grappledElement = document.getElementById('grappled') as HTMLInputElement;
    let invisibleElement = document.getElementById('invisible') as HTMLInputElement;
    let paralyzedElement = document.getElementById('paralyzed') as HTMLInputElement;
    let petrifiedElement = document.getElementById('petrified') as HTMLInputElement;
    let poisonedElement = document.getElementById('poisoned') as HTMLInputElement;
    let restrainedElement = document.getElementById('restrained') as HTMLInputElement;
    let stunnedElement = document.getElementById('stunned') as HTMLInputElement;
    let unconciousElement = document.getElementById('unconcious') as HTMLInputElement;

    blindedElement.style.borderColor = "rgb(255,255,255)";
    charmedElement.style.borderColor = "rgb(255,255,255)";
    deafenedElement.style.borderColor = "rgb(255,255,255)";
    frightenedElement.style.borderColor = "rgb(255,255,255)";
    grappledElement.style.borderColor = "rgb(255,255,255)";
    invisibleElement.style.borderColor = "rgb(255,255,255)";
    paralyzedElement.style.borderColor = "rgb(255,255,255)";
    petrifiedElement.style.borderColor = "rgb(255,255,255)";
    poisonedElement.style.borderColor = "rgb(255,255,255)";
    restrainedElement.style.borderColor = "rgb(255,255,255)";
    stunnedElement.style.borderColor = "rgb(255,255,255)";
    unconciousElement.style.borderColor = "rgb(255,255,255)";

    if(checkArray.includes('blinded')){

      let blindedElement = document.getElementById('blinded') as HTMLInputElement;
      blindedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('charmed')){

      let charmedElement = document.getElementById('charmed') as HTMLInputElement;
      charmedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('deafened')){

      let deafenedElement = document.getElementById('deafened') as HTMLInputElement;
      deafenedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('frightened')){

      let frightenedElement = document.getElementById('frightened') as HTMLInputElement;
      frightenedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('grappled')){

      let grappledElement = document.getElementById('grappled') as HTMLInputElement;
      grappledElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('invisible')){

      let invisibleElement = document.getElementById('invisible') as HTMLInputElement;
      invisibleElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('paralyzed')){

      let paralyzedElement = document.getElementById('paralyzed') as HTMLInputElement;
      paralyzedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('petrified')){

      let petrifiedElement = document.getElementById('petrified') as HTMLInputElement;
      petrifiedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('poisoned')){

      let poisonedElement = document.getElementById('poisoned') as HTMLInputElement;
      poisonedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('restrained')){

      let restrainedElement = document.getElementById('restrained') as HTMLInputElement;
      restrainedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('stunned')){

      let stunnedElement = document.getElementById('stunned') as HTMLInputElement;
      stunnedElement.style.borderColor = "rgb(0,0,255)";

    }
    if(checkArray.includes('unconcious')){

      let unconciousElement = document.getElementById('unconcious') as HTMLInputElement;
      unconciousElement.style.borderColor = "rgb(0,0,255)";

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
        // targetUnit.style.backgroundColor = "rgb(255,0,0)";
        targetUnit.classList.remove("anim_revive");
        targetUnit.classList.add("anim_death");
        targetUnit.innerText = UNITLIST[this.trackedIndex].name + "(dead)";
        UNITLIST[this.trackedIndex].dead = true;
        break;
      }

      // "revives" the unit and falsifies "dead" status
      case statusID = "reviveStatus":{
        targetUnit.style.backgroundColor = "rgb(128,128,128)";
        targetUnit.classList.remove("anim_death");
        targetUnit.classList.add("anim_revive");
        targetUnit.innerText = UNITLIST[this.trackedIndex].name;
        UNITLIST[this.trackedIndex].dead = false;
        break;
      }

      // Adds death saving throw success counters to the current
      // unit on button click

      // unit has one death save 
      case statusID = "ds1":{

        // Unmark saves 1,2,3
        if(UNITLIST[this.trackedIndex].deathSaves === 1 || UNITLIST[this.trackedIndex].deathSaves === 2 || UNITLIST[this.trackedIndex].deathSaves === 3){

          let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
          let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
          let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathSaves = 0;

          deathSaveElement1.style.backgroundColor = "rgb(0,0,0)";
          deathSaveElement2.style.backgroundColor = "rgb(0,0,0)";
          deathSaveElement3.style.backgroundColor = "rgb(0,0,0)";

        }else{

          UNITLIST[this.trackedIndex].deathSaves = 1;
          let deathSaveElement = document.getElementById("ds1") as HTMLInputElement;
          deathSaveElement.style.backgroundColor = "rgb(0,0,255)"

        }
        break;
      }

      // unit has two death saves
      case statusID = "ds2":{

        // Unmark saves 2 and 3
        if(UNITLIST[this.trackedIndex].deathSaves === 2 || UNITLIST[this.trackedIndex].deathSaves === 3){

          let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
          let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathSaves = 1;

          deathSaveElement2.style.backgroundColor = "rgb(0,0,0)";
          deathSaveElement3.style.backgroundColor = "rgb(0,0,0)"

        }else{

          UNITLIST[this.trackedIndex].deathSaves = 2;
          let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
          deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
          let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
          deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
        }
        break;
      }

      // unit has three death saves and stabilizes
      case statusID = "ds3":{

        // Unmark save 3
        if(UNITLIST[this.trackedIndex].deathSaves === 3){

          let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathSaves = 2;

          deathSaveElement3.style.backgroundColor = "rgb(0,0,0)";

        }else{

          UNITLIST[this.trackedIndex].deathSaves = 3;
          let deathSaveElement1 = document.getElementById("ds1") as HTMLInputElement;
          deathSaveElement1.style.backgroundColor = "rgb(0,0,255)"
          let deathSaveElement2 = document.getElementById("ds2") as HTMLInputElement;
          deathSaveElement2.style.backgroundColor = "rgb(0,0,255)"
          let deathSaveElement3 = document.getElementById("ds3") as HTMLInputElement;
          deathSaveElement3.style.backgroundColor = "rgb(0,0,255)"
        }
        break;
      }

      // Adds death saving throw failure counters to the current
      // unit on button click

      // unit has 1 death save failure
      case statusID = "df1":{

        // Unmark fails 1,2,3
        if(UNITLIST[this.trackedIndex].deathFails === 1 || UNITLIST[this.trackedIndex].deathFails === 2 || UNITLIST[this.trackedIndex].deathFails === 3){

          let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
          let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
          let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathFails = 0;

          deathFailElement1.style.backgroundColor = "rgb(0,0,0)";
          deathFailElement2.style.backgroundColor = "rgb(0,0,0)";
          deathFailElement3.style.backgroundColor = "rgb(0,0,0)";

        }else{

          UNITLIST[this.trackedIndex].deathFails = 1;
          let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
          deathFailElement1.style.backgroundColor = "rgb(255,0,0)";
        
        }
        break;
      }

      // unit has 2 death save failures
      case statusID = "df2":{

        // Unmark fails 2 and 3
        if(UNITLIST[this.trackedIndex].deathFails === 2 || UNITLIST[this.trackedIndex].deathFails === 3){

          let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
          let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathFails = 1;

          deathFailElement2.style.backgroundColor = "rgb(0,0,0)";
          deathFailElement3.style.backgroundColor = "rgb(0,0,0)"

        }else{

          UNITLIST[this.trackedIndex].deathFails = 2;
          let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
          deathFailElement1.style.backgroundColor = "rgb(255,0,0)";
          let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
          deathFailElement2.style.backgroundColor = "rgb(255,0,0)";
        }
        break;
      }

      // unit has 3 death save failures and is dead
      case statusID = "df3":{

        // Unmarks fail 3
        if(UNITLIST[this.trackedIndex].deathFails === 3){

          let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;

          UNITLIST[this.trackedIndex].deathFails = 2;

          deathFailElement3.style.backgroundColor = "rgb(0,0,0)";

        }else{

          UNITLIST[this.trackedIndex].deathFails = 3;
          let deathFailElement1 = document.getElementById("df1") as HTMLInputElement;
          deathFailElement1.style.backgroundColor = "rgb(255,0,0)";
          let deathFailElement2 = document.getElementById("df2") as HTMLInputElement;
          deathFailElement2.style.backgroundColor = "rgb(255,0,0)";
          let deathFailElement3 = document.getElementById("df3") as HTMLInputElement;
          deathFailElement3.style.backgroundColor = "rgb(255,0,0)";
        }
        break;
      }

      // Adds conditions to the current units array of conditions 
      // on button click in the action panel

      case statusID = "blinded":{

        if(UNITLIST[this.trackedIndex].conditions.includes('blinded')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('blinded');
          let blindedElement = document.getElementById("blinded") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          blindedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("blinded");
          let blindedElement = document.getElementById("blinded") as HTMLInputElement;
          blindedElement.style.borderColor = "rgb(0,0,255)";
        }
        break;
      }

      case statusID = "charmed":{

        if(UNITLIST[this.trackedIndex].conditions.includes('charmed')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('charmed');
          let charmedElement = document.getElementById("charmed") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          charmedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("charmed");
          let charmedElement = document.getElementById("charmed") as HTMLInputElement;
          charmedElement.style.borderColor = "rgb(0,0,255)";
        }
        break;
      }
      
      case statusID = "deafened":{

        if(UNITLIST[this.trackedIndex].conditions.includes('deafened')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('deafened');
          let deafenedElement = document.getElementById("deafened") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          deafenedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("deafened");
          let deafenedElement = document.getElementById("deafened") as HTMLInputElement;
          deafenedElement.style.borderColor = "rgb(0,0,255)";
        }
        break;
      }

      case statusID = "frightened":{

        if(UNITLIST[this.trackedIndex].conditions.includes('frightened')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('frightened');
          let frightenedElement = document.getElementById("frightened") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          frightenedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("frightened");
          let frightenedElement = document.getElementById("frightened") as HTMLInputElement;
          frightenedElement.style.borderColor = "rgb(0,0,255)";
        }
        break;
      }

      case statusID = "grappled":{

        if(UNITLIST[this.trackedIndex].conditions.includes('grappled')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('grappled');
          let grappledElement = document.getElementById("grappled") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          grappledElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("grappled");
          let grappledElement = document.getElementById("grappled") as HTMLInputElement;
          grappledElement.style.borderColor = "rgb(0,0,255)";

        }
        break;
      }

      case statusID = "invisible":{

        if(UNITLIST[this.trackedIndex].conditions.includes('invisible')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('invisible');
          let invisibleElement = document.getElementById("invisible") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          invisibleElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("invisible");
          let invisibleElement = document.getElementById("invisible") as HTMLInputElement;
          invisibleElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

      case statusID = "paralyzed":{

        if(UNITLIST[this.trackedIndex].conditions.includes('paralyzed')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('paralyzed');
          let paralyzedElement = document.getElementById("paralyzed") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          paralyzedElement.style.borderColor = "rgb(255,255,255)";

        }else{

        UNITLIST[this.trackedIndex].conditions.push("paralyzed");
        let paralyzedElement = document.getElementById("paralyzed") as HTMLInputElement;
        paralyzedElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

      case statusID = "petrified":{

        if(UNITLIST[this.trackedIndex].conditions.includes('petrified')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('petrified');
          let petrifiedElement = document.getElementById("petrified") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          petrifiedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("petrified");
          let petrifiedElement = document.getElementById("petrified") as HTMLInputElement;
          petrifiedElement.style.borderColor = "rgb(0,0,255)";

        }
        break;
      }

      case statusID = "poisoned":{

        if(UNITLIST[this.trackedIndex].conditions.includes('poisoned')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('poisoned');
          let poisonedElement = document.getElementById("poisoned") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          poisonedElement.style.borderColor = "rgb(255,255,255)";

        }else{

        UNITLIST[this.trackedIndex].conditions.push("poisoned");
        let poisonedElement = document.getElementById("poisoned") as HTMLInputElement;
        poisonedElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

      case statusID = "restrained":{

        if(UNITLIST[this.trackedIndex].conditions.includes('restrained')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('restrained');
          let restrainedElement = document.getElementById("restrained") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          restrainedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("restrained");
          let restrainedElement = document.getElementById("restrained") as HTMLInputElement;
          restrainedElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

      case statusID = "stunned":{

        if(UNITLIST[this.trackedIndex].conditions.includes('stunned')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('stunned');
          let stunnedElement = document.getElementById("stunned") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          stunnedElement.style.borderColor = "rgb(255,255,255)";

        }else{

          UNITLIST[this.trackedIndex].conditions.push("stunned");
          let stunnedElement = document.getElementById("stunned") as HTMLInputElement;
          stunnedElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

      case statusID = "unconcious":{

        if(UNITLIST[this.trackedIndex].conditions.includes('unconcious')){

          let i = UNITLIST[this.trackedIndex].conditions.indexOf('unconcious');
          let unconciousElement = document.getElementById("unconcious") as HTMLInputElement;

          UNITLIST[this.trackedIndex].conditions.splice(i,1);

          unconciousElement.style.borderColor = "rgb(255,255,255)";

        }else{

        UNITLIST[this.trackedIndex].conditions.push("unconcious");
        let unconciousElement = document.getElementById("unconcious") as HTMLInputElement;
        unconciousElement.style.borderColor = "rgb(0,0,255)";
        
        }
        break;
      }

    }

  }

}
