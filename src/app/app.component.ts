import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UNITLIST } from './units-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D&D Initiative Tracker';

  name!:string;
  init!:number;
  dex!:number;

  dexMod!:number;
  index!:number;

  dead!:boolean;
  deathSaves!:number;
  deathFails!:number;
  conditions!:string[];
  

  constructor(private router: Router){}

  // starts the app on the title page
  ngOnInit(){

    this.router.navigate(['/app-title']);

  }

  // checks the current route 
  hasRoute(route: string){
    return this.router.url.includes(route);
  }

//// Dev Tools /////////////////////////////////  
displayUnitListSize(){
  let listSizeContainer = document.getElementById('listSize') as HTMLInputElement;
  listSizeContainer.innerText = "Size of Unit List : " + UNITLIST.length;
}

// creates test units for the tracker with hard-coded stats
addDummyUnits(){

  this.name = "Dummy 1";
  this.init = 15;
  this.dex = 17;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 1;
  this.dead = false;
  this.deathSaves = 0;
  this.deathFails = 0;
  this.conditions = [];
  

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,
      dead: this.dead, deathSaves: this.deathSaves,
        deathFails: this.deathFails, 
          conditions: this.conditions});

  this.name = "Dummy 2";
  this.init = 3;
  this.dex = 12;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 2;
  this.dead = false;
  this.deathSaves = 0;
  this.deathFails = 0;
  this.conditions = [];

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,
       dead: this.dead, deathSaves: this.deathSaves, 
        deathFails: this.deathFails,
          conditions: this.conditions});

  this.name = "Dummy 3";
  this.init = 22;
  this.dex = 20;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 3;
  this.dead = false;
  this.deathSaves = 0;
  this.deathFails = 0;
  this.conditions = [];

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,  
      dead: this.dead, deathSaves: this.deathSaves, 
        deathFails: this.deathFails,
          conditions: this.conditions});

}

// displays components of the dev tool when called
loadDevToolComponents(){

  this.displayUnitListSize();

}
////////////////////////////////////////////////

}
