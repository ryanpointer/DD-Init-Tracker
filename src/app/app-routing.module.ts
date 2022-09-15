import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitsComponent } from './add-units/add-units.component';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [

  {path: 'app-add-units', component: AddUnitsComponent},
  {path: 'app-root', component: AppComponent},
  {path: 'app-title', component: TitleComponent},
  {path: 'app-unit', component: UnitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
