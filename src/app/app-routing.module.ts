import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';

// const routes: Routes = [{path:'',component:MenuComponent, children:[{path:'',component:AboutUsComponent},{path:"event",component:EventsComponent}]}];
const routes: Routes = [
  {path:'',component:AboutUsComponent},
  {path:"event",component:EventsComponent}, {path:"registration",component:RegistrationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
