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
  conditions!:string[];
  

  constructor(private router: Router){}

  ngOnInit(){

    this.router.navigate(['/app-title']);

  }

  hasRoute(route: string){
    return this.router.url.includes(route);
  }

//// Dev Tools /////////////////////////////////  
displayUnitListSize(){
  let listSizeContainer = document.getElementById('listSize') as HTMLInputElement;
  listSizeContainer.innerText = "Size of Unit List : " + UNITLIST.length;
}

addDummyUnits(){

  this.name = "Dummy 1";
  this.init = 15;
  this.dex = 17;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 1;
  this.dead = false;
  this.deathSaves = 0;
  this.conditions = [];
  

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,
      dead: this.dead, deathSaves: this.deathSaves, 
        conditions: this.conditions});

  this.name = "Dummy 2";
  this.init = 3;
  this.dex = 12;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 2;
  this.dead = false;
  this.deathSaves = 0;
  this.conditions = [];

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,
       dead: this.dead, deathSaves: this.deathSaves, 
        conditions: this.conditions});

  this.name = "Dummy 3";
  this.init = 22;
  this.dex = 20;
  this.dexMod = Math.floor((this.dex - 10) / 2);
  this.index = 3;
  this.dead = false;
  this.deathSaves = 0;
  this.conditions = [];

  UNITLIST.push({name:this.name, init:this.init, dex:this.dex,
     dexMod:this.dexMod, index:this.index,  
      dead: this.dead, deathSaves: this.deathSaves, 
        conditions: this.conditions});

}

loadDevToolComponents(){

  this.displayUnitListSize();

}
////////////////////////////////////////////////

}
