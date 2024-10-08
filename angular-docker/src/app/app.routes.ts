import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AnotherComponent } from './another/another.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'app-another', component: AnotherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
