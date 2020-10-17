import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
/*import { CallbackComponent } from './components/callback/callback.component';*/

const routes: Routes = [
	{path:'protegida', component: ProtegidaComponent },
	{path:'precios', component: PreciosComponent },
	{path:'home', component: HomeComponent },
/*	{path:'callback', component: CallbackComponent },*/
	{path:'', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
