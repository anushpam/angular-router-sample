import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FakereviewpanelComponent } from './fakereviewpanel/fakereviewpanel.component';
import { MlengineComponent } from './mlengine/mlengine.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'fakereviewpanel', component: FakereviewpanelComponent },
  { path: 'mlengine', component: MlengineComponent },
  // Add more routes here as needed
  // { path: 'products', component: ProductsComponent },
  // { path: 'product/:id', component: ProductDetailComponent },
  // { path: '404', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/404' } // Handle 404 page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
