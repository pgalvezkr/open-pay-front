import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallServicesComponent } from './call-services/call-services.component';
import { CharacteresComponent } from './characteres/characteres.component';

const routes: Routes = [
  { path: 'characteres', component: CharacteresComponent },
  { path: 'call_services', component: CallServicesComponent },
  { path: '', redirectTo: '/characteres', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
