import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PANEL_LAYOUT} from './routes/sidebar';
const routes: Routes = [
  { path: '', children: PANEL_LAYOUT},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
