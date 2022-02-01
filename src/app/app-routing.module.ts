import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombosComponent } from './components/combos/combos.component';

const routes: Routes = [
  {path: 'combos', component : CombosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
