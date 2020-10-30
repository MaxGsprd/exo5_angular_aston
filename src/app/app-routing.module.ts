import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './pages/cats/cats.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path:"", component: CatsComponent},
  {path:"cats", component: CatsComponent},
  {path:"form", component: FormComponent},
  // {path:"**", component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
