import { Component, OnInit } from '@angular/core';
import { UNITLIST } from '../units-list';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitlist = UNITLIST;





  constructor() { }

  ngOnInit(): void {
  }

}
