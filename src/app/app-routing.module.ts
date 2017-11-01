import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CsvComponent } from './datatables/csv/csv.component';
import { ApiComponent } from './datatables/api/api.component';
import { HtmlComponent } from './datatables/html/html.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'data',
    //component: AboutComponent,
    children: [
      {path: 'csv', component: CsvComponent},
      {path: 'api', component: ApiComponent},
      {path: 'html', component: HtmlComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
