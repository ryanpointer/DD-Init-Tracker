import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitComponent } from './unit/unit.component';
import { TitleComponent } from './title/title.component';
import { AddUnitsComponent } from './add-units/add-units.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    TitleComponent,
    AddUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
